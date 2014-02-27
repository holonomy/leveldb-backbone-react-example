var React = require('react');

var App = require('./app');

domready(function () {
  // wire up app to document
  React.renderComponent(App(), document.body);
});

var db = require('./clientdb');
