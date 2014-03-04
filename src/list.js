var Bacon = require('bacon.model');
require('bacon.level')
var _ = require('lodash');
var uuid = require('node-uuid');

var db = require('./serverdb');

module.exports = Bacon.Level.Collection(db);
