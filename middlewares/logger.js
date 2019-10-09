const moment = require('moment');

// Create middleware (everytime we make a request, this mw is gonna run)
const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${
    req.originalUrl
  }: ${moment().format()}`); //http://localhost:5000/api/members: 2019-10-09T17:19:45-05:00
  next();
};

module.exports = logger;

