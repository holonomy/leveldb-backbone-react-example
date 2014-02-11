var React = require('react');
var domready = require('domready');

var App = require('./app.jsx');
var app = App(null);

domready(function () {
  React.renderComponent(app, document.body);
});
