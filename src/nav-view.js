/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link

module.exports = React.createClass({

  render: function () {

    var mode = this.props.mode
    var othermode = (mode === "write") ? "read" : "write";

    return (
      <nav>
        go to <Link href={"/"+othermode}>{othermode}</Link>
      </nav>
    );
  },

});