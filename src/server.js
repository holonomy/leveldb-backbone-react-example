"use strict";

var express = require('express');
var fs = require('fs');
var ecstatic = require('ecstatic');
var multilevel = require('multilevel');
var shoe = require('shoe');
var url = require('url');
var React = require('react');
require('node-jsx').install()

var isProd = (process.env.NODE_ENV === "production");

var app = express();
var Page = require('./page-view')

app.use(ecstatic({
  root: __dirname + "/../static",
  cache: (isProd ? 3600 : 0),
}));

if (!isProd) {
  app.use(require('connect-livereload')());
}

app.use(function (req, res, next) {
  try {
    var path = url.parse(req.url).pathname
    var page = Page({path: path})
    var markup = React.renderComponentToString(page)
    res.send(markup)
  } catch(err) {
    return next(err)
  }
});

var server = app.listen(isProd ? 80 : 5000);

// db
var db = require('./serverdb');

// web sockets
var sock = shoe(function (stream) {
  stream.pipe(multilevel.server(db)).pipe(stream);
});
sock.install(server, '/websocket');

module.exports = server;
