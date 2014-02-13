var Backbone = require('backbonew');

var Item = require('./item');
var liveSync = require('./level-live-sync');

module.exports = Backbone.Collection.extend({
  model: Item,
  initialize: function () {
    liveSync(this);
  },
});
