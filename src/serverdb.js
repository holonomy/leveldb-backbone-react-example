var level = require('level');
var Store = require('level-store');
var multilevel = require('multilevel');
var liveStream = require('level-live-stream');

var db = level(__dirname + "/../db", {
  valueEncoding: 'json',
});
var store = Store(db);
db.methods = db.methods || {};
db.methods.keys = { type: 'async' };
db.keys = store.keys;

liveStream.install(db);
multilevel.writeManifest(db, __dirname + "/manifest.json");

module.exports = db;
