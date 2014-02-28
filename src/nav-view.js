/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link

module.exports = React.createClass({

  render: function () {

    var path = this.props.path.get()
    var otherpath = (path === "/write") ? "/read" : "/write";

    return (
      <nav>
        go to <Link href={otherpath}>{otherpath}</Link>
      </nav>
    );
  },

});