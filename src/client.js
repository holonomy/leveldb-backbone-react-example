var Backbone = require('backbone');
Backbone.$ = require('jquery');
var React = require('react');
var domready = require('domready');

var Router = require('./router');
var App = require('./app');
var AppView = require('./app-view.jsx');


domready(function () {
  var router = new Router();
  var app = new App();
  var appView = AppView({
    app: app,
    router: router,
  });

  // wire up router to app model
  router.on('route', app.onStateSelected, app);
  Backbone.history.start({ pushState: true, hashChange: true });

  // wire up app view to document
  React.renderComponent(appView, document.body);
});

db = require('./clientdb');
