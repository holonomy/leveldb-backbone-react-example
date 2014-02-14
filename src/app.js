var Backbone = require('backbone');

var List = require('./list');

module.exports = Backbone.Model.extend({
  
  onStateSelected: function (state, args) {
    this.set('state', state);
  },

  initialize: function () {
    var list = new List();
    this.set('list', list);
  },
});
