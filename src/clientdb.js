var multilevel = require('multilevel');
var manifest = require('./manifest.json');
var shoe = require('shoe');

var db = multilevel.client(manifest);
var stream = shoe('/websocket');

stream.pipe(db.createRpcStream()).pipe(stream);

module.exports = db;
