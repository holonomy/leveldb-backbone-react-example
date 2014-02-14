var React = require('react');

module.exports = React.createClass({

  render: function () {

    var action = this.props.action;
    var otherAction = (action === "write") ? "read" : "write";

    return (
      <nav>
        go to <a href={otherAction}>{otherAction}</a>
      </nav>
    );
  },

});