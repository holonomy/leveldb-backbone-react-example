"use strict";

var http = require('http');
var ecstatic = require('ecstatic');

var isProd = (process.env.NODE_ENV === "production");

var server = http.createServer(
  ecstatic({
    root: __dirname + "/../static",
    cache: (isProd ? 3600 : 0),
  })
).listen(isProd ? 80 : 5000);

module.exports = server;
