var React = require('react');
var _ = require('lodash');
var uuid = require('node-uuid');

var list = require('./list');

var ItemView = require('./item-view.jsx');

module.exports = React.createClass({

  getInitialState: function () {
    return {
      list: list,
    };
  },

  render: function () {

    console.log("ListView list", this.state.list.get());

    var itemize = function (item) {
      return <ItemView item={item} onChange={this.onChange} key={item.id} mode={this.props.mode} />
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
    this.state.list.onValue(this.someThingChanged);
  },

  someThingChanged: function () {
    this.forceUpdate();
  },

  add: function (e) {
    console.log("add");
    var id = uuid();
    this.state.list.db.put(id, { id: id });
  },
});
