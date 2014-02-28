/** @jsx React.DOM */
var React = require('react');

var NavView = require('./nav-view');
var HeaderView = require('./header-view');
var ListView = require('./list-view');

module.exports = React.createClass({

  render: function () {

    return (
      <div>
        <NavView path={this.props.path} />
        <HeaderView path={this.props.path} />
        <ListView path={this.props.path} />
      </div>
    );
  },
});
