var React = require('react');

var NavView = require('./nav-view.jsx');
var HeaderView = require('./header-view.jsx');
var ListView = require('./list-view.jsx');

var app = require('./app');

module.exports = React.createClass({

  getInitialState: function () {
    return {
      app: app,
    };
  },

  render: function () {

    var mode = this.state.app.get('state');

    return (
      <div onClick={this.onClick} navigate={this.navigate}>
        <NavView mode={mode} />
        <HeaderView mode={mode} />
        <ListView mode={mode} />
      </div>
    );
  },

  componentDidMount: function () {
    this.state.app.onValue('app', this.setState);
  },

  onClick: function (e) {
    if (e.target.tagName === 'A' && e.target.attributes.href) {
      e.preventDefault();
      this.navigate(e.target.attributes.href.value);
    }
  },

  navigate: function (href) {
    History.pushState(null, null, href);
  }
});
