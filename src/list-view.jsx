var React = require('react');
var BackboneMixin = require('react-backbone-mixin');
var _ = require('lodash');
var uuid = require('node-uuid');

var ItemView = require('./item-view.jsx');

module.exports = React.createClass({

  mixins: [BackboneMixin.Model],

  getBackboneModels: function () {
    return [this.props.list];
  },

  render: function () {
    console.log(this.props.list);

    var itemize = function (item) {
      return <ItemView item={item} onChange={this.onChange} key={item.id} />
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
            {_.map(this.props.list.models, itemize)}
          </ul>
        </main>
      </div>
    );
  },

  add: function (e) {
    console.log("add");
    this.props.list.create({});
  },
});
