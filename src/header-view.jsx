var React = require('react');

module.exports = React.createClass({

  render: function () {

    var mode = this.props.mode;

    return (
      <header>
        <h1>{mode}</h1>
      </header>
    );
  },

});