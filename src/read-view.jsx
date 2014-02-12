var _ = require('lodash');
var React = require('react');

var Item = React.createClass({

  render: function () {

    var id = this.props.item.id;
    var value = this.props.item.value;

    return (
      <li>
        {value}
      </li>
    );
  },
});

var List = React.createClass({
  render: function () {

    var itemize = function (kv) {

      var item = {
        id: kv[0],
        value: kv[1],
      };

      return <Item item={item} />
    };

    return (
      <div>
        <nav>
          go to <a href="write">write</a>
        </nav>
        <header>
          <h1>read</h1>
        </header>
        <main>
          <ul>
            {_.map(_.pairs(this.props.items), itemize)}
          </ul>
        </main>
      </div>
    );
  },
});

module.exports = List;
