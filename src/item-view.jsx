var React = require('react');
var BackboneMixin = require('react-backbone-mixin');

module.exports = React.createClass({

  render: function () {

    console.log("itemView props", this.props);

    var id = this.props.item.id;
    var value = this.props.item.get('value');
    var mode = this.props.mode;

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
    console.log("set", this.props.item.id, e.target.value);
    this.props.item.set('value', e.target.value);
  },

  onDelete: function (e) {
    console.log("destroy", this.props.item.id);
    this.props.item.destroy();
  },

});

