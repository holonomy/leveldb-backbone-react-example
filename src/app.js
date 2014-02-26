var Bacon = require('bacon.model');

var router = require('./router');

var app = Bacon.Model({
  state: "/read",
});
app.addSource(router);
app.onValue(console, 'log');

module.exports = app;