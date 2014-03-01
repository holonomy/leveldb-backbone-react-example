/** @jsx React.DOM */
var React = require('react');
var _ = require('lodash');

var router = require('./router');

module.exports = React.createClass({

  render: function () {

    this.props = _.extend(this.props, {
      onClick: this.onClick,
    });

    return this.transferPropsTo(
      React.DOM.a(this.props, this.props.children)
    );
  },

  propTypes: {
    href: React.PropTypes.string.isRequired,
  },

  onClick: function(e) {
    e.preventDefault();
    router.update(this.props.href, { trigger: true });
  },
});