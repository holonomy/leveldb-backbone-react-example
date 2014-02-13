var db = require('./clientdb');

module.exports = function liveSync (collection) {
  // check if already being sync'd
  if (collection.inSync) { return; }

  // sync live
  collection.inSync = true;
  db.liveStream()
    .on('data', function (change) {
      console.log("data", change);

      var changed = collection.get(change.key);

      switch (change.type) {
        case undefined:
        case 'get':
        case 'put':
          if (changed) {
            changed.set(change.value);
          } else {
            collection.push(change.value);
          }
          break;

        case 'del':

          if (changed) { 
            changed.trigger(
              'destroy',
              changed
            );
          }
          break;

      }
    })
    .on('error', function (err) {
      throw err;
    })
    .on('close', function () {
      collection.inSync = false;
    });
};