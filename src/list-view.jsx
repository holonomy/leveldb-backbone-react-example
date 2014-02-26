var React = require('react');
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
    console.log("ListView render", this.state);

    var mode = this.props.mode;

    var itemize = function (item) {
      return <ItemView item={item} onChange={this.onChange} key={item.id} mode={mode} />
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

  add: function (e) {
    console.log("add");
    this.state.list.push({});
  },
});
