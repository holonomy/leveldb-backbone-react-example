/** @jsx React.DOM */
var React = require('react');
var _ = require('lodash');
var uuid = require('node-uuid');

var List = require('./list');
var ItemView = require('./item-view');

var list = List();

module.exports = React.createClass({

  getInitialState: function () {
    return {
      list: list,
    };
  },

  render: function () {

    var path = this.props.path;
    var list = this.state.list;

    var itemize = function (item) {
      return <ItemView item={item} key={item.id} path={path} />
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

  componentDidMount: function () {
    this.state.list.onValue(function (value) {
      this.forceUpdate();
    }.bind(this));
  },

  add: function (e) {
    console.log("add");
    var id = uuid();
    this.state.list.Model(id, {}).put();
  },
});
