var Bacon = require('bacon.model');
var _ = require('lodash');
var uuid = require('node-uuid');

var list = new Bacon.Bus();

var push = list.push;
list.push = function (obj) {
  console.log("pushing!", obj);
  obj = _.defaults(obj, { id: uuid(), });
  push(Bacon.Model(obj))
}

module.exports = list;