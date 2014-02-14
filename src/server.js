"use strict";

var express = require('express');
var fs = require('fs');
var ecstatic = require('ecstatic');
var multilevel = require('multilevel');
var shoe = require('shoe');

var isProd = (process.env.NODE_ENV === "production");

var app = express();

app.configure(function () {
  app.use(ecstatic({
    root: __dirname + "/../static",
    cache: (isProd ? 3600 : 0),
  }));
})

app.get('*', function (req, res) {
  fs.createReadStream(__dirname + '/../static/index.html').pipe(res);
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
