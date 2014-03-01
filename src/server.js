"use strict";

var isProd = (process.env.NODE_ENV === "production");
var isDev = (process.env.NODE_ENV === "development");

//
// http server!
//
var connect = require('connect');
var http = require('http');

var app = connect();

if (isProd) {
  app.use(require('morgan')());
}

app.use(require('compression')());
app.use(require('static-favicon')(__dirname + '/../static/favicon.ico'));
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

var Page = require('./page-view');
var Path = require('./path');
var App = require('./app');

// Cached regex for stripping a leading hash/slash and trailing space.
var routeStripper = /^[#\/]|\s+$/g;

app.use(function (req, res, next) {
  try {
    var path = url.parse(req.url).pathname;
    path = path.replace(routeStripper, '');
    var page = Page({ path: Path(path) });
    var pageHtml = React.renderComponentToString(page);
    var app = App({ path: Path(path) });
    var appHtml = React.renderComponentToString(app);
    var html = pageHtml.replace("INSERTBODYHERE", appHtml)
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(html);
  } catch(err) {
    return next(err);
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