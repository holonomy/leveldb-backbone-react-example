var React = require('react');

module.exports = React.createClass({

  render: function () {

    var action = this.props.action;

    return (
      <header>
        <h1>{action}</h1>
      </header>
    );
  },

});