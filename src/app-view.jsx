var React = require('react');
var BackboneMixin = require('react-backbone-mixin');

var NavView = require('./nav-view.jsx');
var HeaderView = require('./header-view.jsx');
var ListView = require('./list-view.jsx');

module.exports = React.createClass({
  mixins: [BackboneMixin.Model],

  getBackboneModels: function () {
    return [this.props.app];
  },

  render: function () {

    var action = this.props.app.get('state');
    var list = this.props.app.get('list');

    return (
      <div onClick={this.onClick} navigate={this.navigate}>
        <NavView action={action} />
        <HeaderView action={action} />
        <ListView list={list} action={action} />
      </div>
    );
  },

  onClick: function (e) {
    if (e.target.tagName === 'A' && e.target.attributes.href) {
      e.preventDefault();
      this.navigate(e.target.attributes.href.value);
    }
  },

  navigate: function (href) {
    console.log("navigate", href);
    this.props.router.navigateToAndTrigger(href);
  }
});
