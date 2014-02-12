var React = require('react');
var domready = require('domready');

var app = require('./app.jsx');

domready(function () {
  React.renderComponent(app, document.body);
});

db = require('./clientdb');
