/** @jsx React.DOM */
var React = require('react');

var MainView = require('./main-view');

var window = window;

module.exports = React.createClass({

  render: function () {

    return (
      <MainView onClick={this.onClick} path={this.props.path} />
    );
  },
});
