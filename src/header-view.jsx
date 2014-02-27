var React = require('react');

module.exports = React.createClass({

  render: function () {

    return (
      <header>
        <h1>{this.props.mode}</h1>
      </header>
    );
  },
});