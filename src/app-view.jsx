var React = require('react');
var BackboneMixin = require('react-backbone-mixin');

var List = require('./list');
var ListView = require('./list-view.jsx');

module.exports = React.createClass({
  mixins: [BackboneMixin.Model],

  getBackboneModels: function () {
    return [this.props.app];
  },

  render: function () {

    var action = this.props.app.state || 'write';
    var otherAction = (action === "write") ? "read" : "write";

    return (
      <div>
        <nav>
          go to <a href={"#" + otherAction}>{otherAction}</a>
        </nav>
        <header>
          <h1>{action}</h1>
        </header>
        <ListView list={new List()} action={action} />
      </div>
    );
  },

});
