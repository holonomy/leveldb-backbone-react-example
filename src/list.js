var Bacon = require('bacon.model');
var _ = require('lodash');
var uuid = require('node-uuid');

var db = require('./clientdb');

var liveStream = Bacon.fromBinder(function (sink) {
  var stream = db.liveStream()
  .on('data', function (change) {
    console.log("data", change);

    switch (change.type) {
      case undefined:
      case 'put':
        return function (data) {
          var index = _.indexOf(_.pluck(data, 'id'), change.key);
          if (index !== -1) {
            data[index] = change.value;
          } else {
            data.push(change.value);
          }
          return data;
        }
        break;

      case 'del':
        return function (data) {
          return _.filter(data, function (item) {
            return item.id !== change.key;
          })
        }
        break;
    }

    return function (data) { return data; }
  })
  .on('error', function (err) {
    throw err;
  })

  return function unsubscribe () {
    delete stream;
  }
});

var list = Bacon.Model([]);
list.apply(liveStream);
list.db = db;

module.exports = list;