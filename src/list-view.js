/** @jsx React.DOM */
var React = require('react');
var _ = require('lodash');
var uuid = require('node-uuid');
var list = require('./list');

var ItemView = require('./item-view');

module.exports = React.createClass({

  getInitialState: function () {
    return {
      list: list,
    };
  },

  render: function () {

    console.log("ListView list", this.state.list.get());
    var mode = this.props.mode;

    var itemize = function (item) {
      return <ItemView item={item} key={item.lens('id').get()} mode={mode} />
    };

    return (
      <main>
        <button onClick={this.add}>+</button>
        <ul>
          {this.state.list.map(itemize)}
        </ul>
      </main>
    );
  },

  componentWillMount: function () {
    this.state.list.onValue(function (val) {
      this.forceUpdate();
    }.bind(this));
  },

  add: function (e) {
    console.log("add");
    var id = uuid();
    this.state.list.db.put(id, { id: id });
  },
});
