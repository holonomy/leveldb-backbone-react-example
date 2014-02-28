"use strict";

var isProd = (process.env.NODE_ENV === "production");
var isDev = (process.env.NODE_ENV === "development");

//
// http server!
//
var connect = require('connect');
var http = require('http');

var app = connect();

app.use(require('compression')());
app.use(require('ecstatic')({
  root: __dirname + "/../static",
  cache: (isProd ? 3600 : 0),
}));

if (isDev) {
  app.use(require('connect-livereload')());
}

var url = require('url');
var React = require('react');
require('node-jsx').install()

var Page = require('./page-view')
app.use(function (req, res, next) {
  try {
    var path = url.parse(req.url).pathname
    var page = Page({path: path})
    var markup = React.renderComponentToString(page)
    res.end(markup)
  } catch(err) {
    return next(err)
  }
});

var server = http.createServer(app);
server.listen(isProd ? 80 : 5000);

//
// socket server!
//
var multilevel = require('multilevel');
var shoe = require('shoe');

// db
var db = require('./serverdb');

// web sockets
var sock = shoe(function (stream) {
  stream.pipe(multilevel.server(db)).pipe(stream);
});
sock.install(server, '/websocket');

module.exports = server;