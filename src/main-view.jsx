var React = require('react');

var NavView = require('./nav-view.jsx');
var HeaderView = require('./header-view.jsx');
var ListView = require('./list-view.jsx');

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
