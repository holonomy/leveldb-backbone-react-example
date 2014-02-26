var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Bacon = require('bacon.model');
require('history.js/scripts/bundled-uncompressed/html5/jquery.history.js');

var router = Bacon.fromBinder(function (sink) {
  History.Adapter.bind(window, 'statechange', function () {
    var state = History.getState();
    sink(state);
  });

  return function unsubscribe () {
    $(window).unbind('statechange');
  }
});

module.exports = router;