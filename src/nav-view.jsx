var React = require('react');

module.exports = React.createClass({

  render: function () {

    var mode = this.props.mode;
    var othermode = (mode === "write") ? "read" : "write";

    return (
      <nav>
        go to <a href={othermode}>{othermode}</a>
      </nav>
    );
  },

});