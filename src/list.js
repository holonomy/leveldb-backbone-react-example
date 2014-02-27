var Bacon = require('bacon.model');
var _ = require('lodash');
var uuid = require('node-uuid');
var List = require('bacon.level').List;

var db = require('./clientdb');

var list = List(db);

module.exports = list;
