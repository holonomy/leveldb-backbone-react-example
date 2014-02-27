/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router-component');

var MainView = require('./main-view');

var window = window;
var Routes = (!!window) ? Router.Locations : Router.Pages;
var Route = (!!window) ? Router.Location : Router.Page;

module.exports = React.createClass({

  render: function () {

    return (
      <Routes path={this.props.path}>
        <Route path="/" mode="read" handler={MainView} />
        <Route path="/read" mode="read" handler={MainView} />
        <Route path="/write" mode="write" handler={MainView} />
      </Routes>
    );
  },
});
