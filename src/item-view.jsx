var React = require('react');
var BackboneMixin = require('react-backbone-mixin');

module.exports = React.createClass({

  mixins: [BackboneMixin.Model],

  getBackboneModels: function () {
    return [this.props.item];
  },

  render: function () {

    var id = this.props.item.id;
    var value = this.props.item.get('value');

    return (
      <li>
        <input value={value} onChange={this.onChange} placeholder="empty" />
        <button onClick={this.onDelete}>x</button>
      </li>
    );
  },

  onChange: function (e) {
    console.log("set", this.props.item.id, e.target.value);
    this.props.item.set('value', e.target.value);
  },

  onDelete: function (e) {
    console.log("destroy", this.props.item.id);
    this.props.item.destroy();
  },
});

