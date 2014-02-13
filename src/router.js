// http://www.edave.net/2014/01/26/top-down-backbone-routers-and-application-state/

var Backbone = require('backbonew');

module.exports = Backbone.Router.extend({
  route: {
    "persons": "persons",
  },

  navigateToAndTrigger: function(href) {
    this.navigate(url, {
      trigger: true
    })
  }

});
