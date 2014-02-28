/** @jsx React.DOM */
var React = require('react');
var domready = require('domready');

var Path = require('./path');
var App = require('./app');

domready(function () {
  // create app
  var app = App({ path: Path() });
  // wire up app to document body
  //React.renderComponent(app, document.body);
});

db = require('./clientdb');
