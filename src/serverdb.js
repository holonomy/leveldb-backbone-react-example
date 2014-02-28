var level = require('level');
var multilevel = require('multilevel');
var liveStream = require('level-live-stream');

var db = level(__dirname + "/../db", {
  valueEncoding: 'json',
});

liveStream.install(db);
multilevel.writeManifest(db, __dirname + "/manifest.json");

module.exports = db;
