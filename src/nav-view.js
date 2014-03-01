/** @jsx React.DOM */
var React = require('react');

var LinkView = require('./link-view');

module.exports = React.createClass({

  render: function () {

    var path = this.props.path.get();
    var otherpath = (path === "write") ? "read" : "write";

    return (
      <nav>
        go to <LinkView href={otherpath}>{otherpath}</LinkView>
      </nav>
    );
  },

});