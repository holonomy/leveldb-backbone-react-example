var React = require('react');
var _ = require('lodash');

var db = require('./clientdb');

var Item = React.createClass({

  render: function () {

    var id = this.props.item.id;
    var text = this.props.item.text;

    return (
      <li>
        <input value={text} onChange={this.onChange} placeholder="empty" />
        <button onClick={this.onDelete}>x</button>
      </li>
    );
  },

  onChange: function (prop) {
    return function (e) {
      console.log("changing", this);
    }.bind(this);
  },

  onDelete: function (e) {
    console.log("deleting", this);
    db.del(this.props.item.id);
  },
});

var List = React.createClass({
  getInitialState: function () {
    return 
  },
  render: function () {

    var createItem = function (item) {
      return <Item item={item} onChange={this.onChange} />
    };

    return (
      <div>
        <nav>
          <a href="read">read</a>
        </nav>
        <main>
          <button onClick={this.add}>+</button>
          <ul>
            {_.values(this.props.items).map(createItem)}
          </ul>
        </main>
      </div>
    );
  },
});

module.exports = List;
