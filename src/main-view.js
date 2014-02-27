/** @jsx React.DOM */
var React = require('react');

var NavView = require('./nav-view');
var HeaderView = require('./header-view');
var ListView = require('./list-view');

module.exports = React.createClass({

  render: function () {

    return (
      <div>
        <NavView mode={this.props.mode} />
        <HeaderView  mode={this.props.mode} />
        <ListView mode={this.props.mode} />
      </div>
    );
  },
});
