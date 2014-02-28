/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

  render: function () {

    var props = {
      onClick: this.onClick,
    };
    
    return this.transferPropsTo(
      React.DOM.a(props, this.props.children)
    );
  },

  propTypes: {
    href: React.PropTypes.string.isRequired,
  },

  onClick: function(e) {
    e.preventDefault();

    this.props.path.update(this.props.href);

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  },
});