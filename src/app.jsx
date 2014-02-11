var React = require('react');
var Router = require('react-router-component');

var Locations = Router.Locations;
var Location = Router.Location;

var WriteView = require('./write-view.jsx');
var ReadView = require('./read-view.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <Locations onClick={this.onClick} ref="router">
        <Location path="/" handler={WriteView} />
        <Location path="/write" handler={WriteView} />
        <Location path="/read" handler={ReadView} />
      </Locations>
    );
  },
  onClick: function (e) {
    if (e.target.tagName === 'A' && e.target.attributes.href) {
      e.preventDefault();
      this.refs.router.navigate(e.target.attributes.href.value);
    }
  },
});  
