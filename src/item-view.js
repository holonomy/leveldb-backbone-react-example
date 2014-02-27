/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

  render: function () {

    console.log("itemView props", this.props);

    var id = this.props.item.lens('id').get();
    var value = this.props.item.lens('value').get();

    if (mode === "write") {
      return (
        <li>
          <input value={value} onChange={this.onChange} placeholder="empty" />
          <button onClick={this.onDelete}>x</button>
        </li>
      );
    } else {
      return (
        <li>
          {value}
        </li>
      );
    }
  },

  onChange: function (e) {
    console.log("set", this.props.item.lens('id'), e.target.value);

    this.props.list.db.put(
      this.props.item.lens('id'),
      _.assign(this.props.item.get(), {
        value: e.target.value,
      })
    );
  },

  onDelete: function (e) {
    console.log("destroy", this.props.item.get('id'));
    this.props.list.db.del(this.props.item.get('id'));
  },

});

