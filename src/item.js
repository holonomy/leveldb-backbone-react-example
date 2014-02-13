var Backbone = require('backbonew');
var levelSync = require('levelsync');
var uuid = require('node-uuid');

var db = require('./clientdb');
var sync = levelSync(db);

module.exports = Backbone.Model.extend({
  sync: sync,
  
  defaults: function () {
    return {
      id: uuid(),
    };
  },
});
