"use strict";

var http = require('http');
var ecstatic = require('ecstatic');
var multilevel = require('multilevel');
var shoe = require('shoe');

var isProd = (process.env.NODE_ENV === "production");

var server = http.createServer(
  ecstatic({
    root: __dirname + "/../static",
    cache: (isProd ? 3600 : 0),
  })
);

// db
var db = require('./serverdb');

// web sockets
var sock = shoe(function (stream) {
  stream.pipe(multilevel.server(db)).pipe(stream);
});
sock.install(server, '/websocket');

module.exports = server;
