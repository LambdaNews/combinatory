import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import router from './routes';

require('dotenv').load();

// ===========
// express
// ===========

module.exports = () => {
  // instance of express
  const app = express();

  // if we are on a production environment we are likely behind a proxy
  if (process.env.NODE_ENV === 'production') {
    app.enable('trust proxy');
  }

  // disallow OPTIONS calls
  app.all('*', (req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.status(409).end();
    } else {
      next();
    }
  });

  // such easy params
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  // serve static files (html, js, css, images, etc)
  app.use(express.static(path.join(__dirname, '../public'), {
    index: 'index.html',
    redirect: false,
  }));

  app.use(express.static('css'));

  // register route handler
  app.use('/api', router);

  // serve the index.html over all unmatched Routes.js
  app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
  });

  // handle errors - last middleware to catch all
  app.use((err, req, res, next) => {
    if (err) {
      // log the request with error noted
      console.error('ERROR - %s, %s', req.method, req.url);

      // log the Error
      console.error(err.stack);

      // determine if we want to return the error message to user
      let errorMessage;
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
