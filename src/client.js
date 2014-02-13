var React = require('react');
var domready = require('domready');

var Router = require('./router');
var App = require('./app');
var AppView = require('./app-view.jsx');


domready(function () {
  var router = new Router();
  var app = new App();
  var appView = AppView({ app: app });

  // wire up router to app model
  router.on('all', app.onStateSelected, app);

  // wire up app view to document
  React.renderComponent(appView, document.body);
});

db = require('./clientdb');
