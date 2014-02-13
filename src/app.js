var Backbone = require('backbonew');

module.exports = Backbone.Model.extend({
  onStateSelected: function (state, args) {
    this.set('state', state);
  },
});
