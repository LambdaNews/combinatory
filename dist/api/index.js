'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').load();

// ===========
// express
// ===========

module.exports = function () {
  // instance of express
  var app = (0, _express2.default)();

  // if we are on a production environment we are likely behind a proxy
  if (process.env.NODE_ENV === 'production') {
    app.enable('trust proxy');
  }

  // disallow OPTIONS calls
  app.all('*', function (req, res, next) {
    if (req.method === 'OPTIONS') {
      res.status(409).end();
    } else {
      next();
    }
  });

  // such easy params
  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({
    extended: true
  }));

  // serve static files (html, js, css, images, etc)
  app.use(_express2.default.static(_path2.default.join(__dirname, '../public'), {
    index: 'index.html',
    redirect: false
  }));

  app.use(_express2.default.static('css'));

  // register route handler
  app.use('/api', _routes2.default);

  // serve the index.html over all unmatched Routes.js
  app.get('*', function (req, res) {
    res.status(200).sendFile(_path2.default.join(__dirname, '../public/index.html'));
  });

  // handle errors - last middleware to catch all
  app.use(function (err, req, res, next) {
    if (err) {
      // log the request with error noted
      console.error('ERROR - %s, %s', req.method, req.url);

      // log the Error
      console.error(err.stack);

      // determine if we want to return the error message to user
      var errorMessage = void 0;
      if (process.env.NODE_ENV === 'development') {
        errorMessage = err.message;
      }

      // Return 500 error code
      res.status(500).send({ error: errorMessage });
    }

    next();
  });

  return app;
};