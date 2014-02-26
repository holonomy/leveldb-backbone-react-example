var $ = jQuery = require('jquery');
var React = require('react');

var AppView = require('./app-view.jsx');

$(function () {
  // create app view
  var appView = AppView();
  // wire up app view to document
  React.renderComponent(appView, document.body);
});

db = require('./clientdb');
