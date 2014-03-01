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

    var path = this.props.path;
    var list = this.state.list;
    console.log("renderList", list.get());

    var itemize = function (item) {
      return <ItemView item={item} key={item.get().id} path={path} list={list} />
    };

    return (
      <main>
        <button onClick={this.add}>+</button>
        <ul>
          {_.map(this.state.list.get(), itemize)}
        </ul>
      </main>
    );
  },

  componentWillMount: function () {
    list.onValue(function (value) {
      console.log("onValue", value);
      this.setState({
        list: list,
      });
    }.bind(this));
  },

  add: function (e) {
    console.log("add");
    var id = uuid();
    this.state.list.db.put(id, {});
  },
});
