/** @jsx React.DOM */
var React = require('react');

var App = require('./app');

module.exports = React.createClass({

  render: function () {

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>example</title>
          <link rel="stylesheet" href="index.css" />
          <script src="index.js"></script>
        </head>
        <body>
          <App path={this.props.path} />
        </body>
      </html>
    );
  },
});
