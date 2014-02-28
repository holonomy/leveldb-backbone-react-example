/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

  render: function () {

    return (
      <header>
        <h1>{this.props.path.get()}</h1>
      </header>
    );
  },
});