const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

const basicSetup = (app) => {
  app.use(logger('common', { skip: (req, res) => { return res.statusCode < 400; } }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
};


const initApp = async () => {
  try {
    const app = express();
    const routingSetup = require('./src/routes');
    basicSetup(app);
    routingSetup(app);
    // await mongodb.connectToMongo();
    return app;
  } catch (err) {
    console.log(`A general error occured: ${err.message}`);
    throw err;
  }
};

module.exports = {
  initApp,
};
