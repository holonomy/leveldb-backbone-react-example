// http://www.edave.net/2014/01/26/top-down-backbone-routers-and-application-state/

var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
  routes: {
    "": "write",
    "write": "write",
    "read": "read",
    "*notFound": "notFound",
  },

  navigateToAndTrigger: function(href) {
    this.navigate(href, {
      trigger: true
    });
  },

});
