var $ = jQuery = require('jquery');
var React = require('react');

var App = require('./app');

$(function () {
  // wire up app to document
  React.renderComponent(App(), document.body);
});

var db = require('./clientdb');
