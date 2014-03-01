var Bacon = require('bacon.model');


module.exports = function (initPath) {
  var path;

  if (typeof initPath !== 'undefined') {
    path = Bacon.Model(initPath);

  } else {
    var router = require('./router');

    path = Bacon.Model(router.getFragment());

    router.onChange(function (newPath) {
      path.set(newPath);
    });

    path.update = router.update.bind(router);
  }

  return path;
};