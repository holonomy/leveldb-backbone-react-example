var React = require('react');
var BackboneMixin = require('react-backbone-mixin');

var List = require('./list');
var ListView = require('./list-view.jsx');

module.exports = React.createClass({
  mixins: [BackboneMixin.Model],

  getBackboneModels: function () {
    return [this.props.app];
  },

  render: function () {
    return (
      <ListView list={new List()} />
    );
  },

});
