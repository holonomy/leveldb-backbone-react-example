var domready = require('domready');
var Router = require('location-bar')

var router = new Router();

if (typeof document !== 'undefined') {
  domready(function () {
    router.start({
      pushState: true,
    });
  });
}

module.exports = router;