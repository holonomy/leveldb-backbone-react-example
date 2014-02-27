var $ = jQuery = require('jquery');
var React = require('react');

var App = require('./app.jsx');

$(function () {
  // wire up app to document
  React.renderComponent(App(), document.body);
});

db = require('./clientdb');
