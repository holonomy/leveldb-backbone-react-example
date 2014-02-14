var Backbone = require('backbone');

var Item = require('./item');
var liveSync = require('./level-live-sync');

module.exports = Backbone.Collection.extend({
  model: Item,
  initialize: function () {
    this.stream = liveSync(this);
  },
});
