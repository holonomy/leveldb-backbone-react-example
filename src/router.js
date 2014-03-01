var domready = require('domready');
var Router = require('location-bar')

var router = new Router();

domready(function () {
  router.start({
    pushState: true,
  });
});

module.exports = router;