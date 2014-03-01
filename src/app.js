/** @jsx React.DOM */
var React = require('react');

var MainView = require('./main-view');

module.exports = React.createClass({

  render: function () {

    return (
      <MainView path={this.props.path} />
    );
  },

  componentWillMount: function () {
    this.props.path.onValue(function (val) {
      this.forceUpdate();
    }.bind(this));
  },
});
