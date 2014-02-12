var React = require('react');
var Router = require('react-router-component');

var Locations = Router.Locations;
var Location = Router.Location;

var db = require('./clientdb');
var WriteView = require('./write-view.jsx');
var ReadView = require('./read-view.jsx');

var App = React.createClass({

  getInitialState: function () {
    return { items: {} };
  },

  render: function () {
    console.log("state", this.state);
    return (
      <Locations onClick={this.onClick} ref="router" items={this.state.items}>
        <Location path="/" handler={WriteView} />
        <Location path="/write" handler={WriteView} />
        <Location path="/read" handler={ReadView} />
      </Locations>
    );
  },
  onClick: function (e) {
    if (e.target.tagName === 'A' && e.target.attributes.href) {
      e.preventDefault();
      this.refs.router.navigate(e.target.attributes.href.value);
    }
  },
});

var app = App(null);

db.createLiveStream().on('data', function (change) {
  console.log("change", change);

  var items = app.state.items;

  // delete?
  if (change.type == 'del') {
      delete items[change.key];
      app.setState({items: items});
      return;
  }

  items[change.key] = change.value;
  app.setState({items: items});
});

module.exports = app;
