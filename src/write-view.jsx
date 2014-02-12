var React = require('react');
var _ = require('lodash');
var uuid = require('node-uuid');

var db = require('./clientdb');

var Item = React.createClass({

  render: function () {

    var id = this.props.item.id;
    var value = this.props.item.value;

    return (
      <li>
        <input value={value} onChange={this.onChange} placeholder="empty" />
        <button onClick={this.onDelete}>x</button>
      </li>
    );
  },

  onChange: function (e) {
    console.log("put", this.props.item.id, e.target.value);
    db.put(this.props.item.id, e.target.value);
  },

  onDelete: function (e) {
    console.log("del", this.props.item.id);
    db.del(this.props.item.id);
  },
});

var List = React.createClass({
  render: function () {

    var itemize = function (kv) {

      var item = {
        id: kv[0],
        value: kv[1],
      };

      return <Item item={item} onChange={this.onChange} />
    };

    return (
      <div>
        <nav>
          go to <a href="read">read</a>
        </nav>
        <header>
          <h1>write</h1>
        </header>
        <main>
          <button onClick={this.add}>+</button>
          <ul>
            {_.map(_.pairs(this.props.items), itemize)}
          </ul>
        </main>
      </div>
    );
  },

  add: function (e) {
    var id = uuid();
    console.log("put", id, "");
    db.put(id, "");
  },
});

module.exports = List;
