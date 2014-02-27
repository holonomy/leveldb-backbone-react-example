var React = require('react');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var MainView = require('./main-view.jsx');

module.exports = React.createClass({

  render: function () {

    return (
      <Locations>
        <Location path="/" mode="read" handler={MainView} />
        <Location path="/read" mode="read" handler={MainView} />
        <Location path="/write" mode="write" handler={MainView} />
      </Locations>
    );
  },
});
