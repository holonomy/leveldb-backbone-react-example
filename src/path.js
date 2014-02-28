var Bacon = require('bacon.model');
var LocationBar = require('location-bar')
var locationBar = new LocationBar();

var window = window;

module.exports = function (initPath) {
  initPath = initPath || '#';

  var path = Bacon.Model(initPath);

  if (window) {
    locationBar.onChange(function (newPath) {
      path.set(newPath);
    });
    locationBar.start({
      pushState:true,
    });
  }

  return path;
};