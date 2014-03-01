var Bacon = require('bacon.model');


module.exports = function (initPath) {
  var path;

  if (typeof initPath !== 'undefined') {
    path = Bacon.Model(initPath);
    path.name(initPath);

  } else {
    var router = require('./router');

    path = Bacon.Model(router.getFragment());
    path.name(router.getFragment);

    router.onChange(function (newPath) {
      path.set(newPath);
      path.name(initPath);
    });

    path.update = router.update.bind(router);
  }

  return path;
};