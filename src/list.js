var Backbone = require('backbonew');

var Item = require('./item');

module.exports = Backbone.Collection.extend({
  model: Item,
});
