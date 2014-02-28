var Bacon = require('bacon.model');

var window = window;

module.exports = function (initPath) {
  initPath = initPath || '#';

  var path = Bacon.Model(initPath);

  if (window) {
    var LocationBar = require('location-bar')
    var locationBar = new LocationBar();

    locationBar.onChange(function (newPath) {
      path.set(newPath);
    });
    locationBar.start({
      pushState:true,
    });

    path.update = locationBar.update;
  }

  return path;
};