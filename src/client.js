var React = require('react');
var domready = require('domready');

var App = require('./app');

domready(function () {
  // wire up app to document
  React.renderComponent(App(), document.body);
});

var db = require('./clientdb');
