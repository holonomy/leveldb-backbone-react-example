var Bacon = require('bacon.model');
var locationBar = require('location-bar')();

module.exports = function (initPath) {
  initPath = initPath || '#';

  var path = Bacon.Model(initPath);

  var window = window;
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