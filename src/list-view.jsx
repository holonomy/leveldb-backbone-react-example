var React = require('react');
var BackboneMixin = require('react-backbone-mixin');
var _ = require('lodash');
var uuid = require('node-uuid');

var ItemView = require('./item-view.jsx');

module.exports = React.createClass({

  mixins: [BackboneMixin.Model],

  getBackboneModels: function () {
    return [this.props.list];
  },

  render: function () {
    console.log("ListView render", this.props);

    var action = this.props.action;

    var itemize = function (item) {
      return <ItemView item={item} onChange={this.onChange} key={item.id} action={action} />
    };

    return (
      <main>
        <button onClick={this.add}>+</button>
        <ul>
          {_.map(this.props.list.models, itemize)}
        </ul>
      </main>
    );
  },

  add: function (e) {
    console.log("add");
    this.props.list.create({});
  },
});
