/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

  render: function () {

    var item = this.props.item.get();
    var path = this.props.path.get();

    if (path === "/write") {
      return (
        <li>
          <input value={item.value} onChange={this.onChange} placeholder="empty" />
          <button onClick={this.onDelete}>x</button>
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

  onChange: function (e) {
    console.log("set", this.props.item.get().id, e.target.value);

    this.props.list.db.put(
      this.props.item.get().id,
      _.assign(this.props.item.get(), {
        value: e.target.value,
      })
    );
  },

  onDelete: function (e) {
    console.log("destroy", this.props.item.get().id);
    this.props.list.db.del(this.props.item.get().id);
  },

});

