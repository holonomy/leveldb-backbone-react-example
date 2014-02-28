/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

  render: function () {

    var path = this.props.path.get()
    var otherpath = (path === "/write") ? "/read" : "/write";

    return (
      <nav>
        go to <a href={otherpath}>{otherpath}</a>
      </nav>
    );
  },

});