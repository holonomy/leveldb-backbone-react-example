/** @jsx React.DOM */
var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({

  render: function () {

    var item = this.props.item.get();
    var path = this.props.path.get();

    if (path === "write") {
      return (
        <li>
          <input value={item.value} onChange={this.onChange} placeholder="empty" />
          <button onClick={this.onDelete}>x</button>
          <button onClick={this.onSave}>✓</button>
        </li>
      );
    } else {
      return (
        <li>
          {item.value}
        </li>
      );
    }
  },

  componentDidMount: function () {
    this.props.item.onValue(function (value) {
      this.forceUpdate();
    }.bind(this));
  },

  onChange: function (e) {
    console.log("set", this.props.item.id, e.target.value);

    this.props.item.set({
      value: e.target.value
    });
  },

  onSave: function (e) {
    console.log("save", this.props.item.id);

    this.props.item.put();
  },

  onDelete: function (e) {
    console.log("destroy", this.props.item.id);
    this.props.item.del();
  },

});

