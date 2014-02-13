var Backbone = require('backbonew');

module.exports = Backbone.Model.extend({
  onStateSelected: function (state, args) {
    console.log(arguments);
    this.set('state', state);
  },
});
