var isProd = (process.env.NODE_ENV === "production");

module.exports = 
  require('./server')
  .listen(isProd ? 80 : 5000);
