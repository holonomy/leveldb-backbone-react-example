var Bacon = require('bacon.model');
require('bacon.level')
var _ = require('lodash');
var uuid = require('node-uuid');

var db = require('./serverdb');

var list = Bacon.Level(db);

module.exports = list;
