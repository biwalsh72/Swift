/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const config = require('./db-info');

const conf = require('./session-info');

exports.configExpress = app => {
  const sessionStore = new MySQLStore(config.configDB);
  app.set('view engine', 'ejs');
  // eslint-disable-next-line no-param-reassign
  app.locals.pretty = true;

  const logErrors = (err, req, res, next) => {
    console.error(err.stack);
    next(err);
  };

  const clientErrorHandler = (err, req, res, next) => {
    if (req.xhr) {
      res.send(500, { error: 'Something blew up!' });
    } else {
      next(err);
    }
  };

  const errorHandler = (err, req, res, next) => {
    res.status(500);
    res.render('error', { error: err });
  };

  const applyBodyParser = fn => {
    return (req, res, next) => {
      fn(req, res, next);
    };
  };

  app.use(applyBodyParser(bodyParser.json()));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser()); // required before session.

  app.use(
    session({
      secret: conf.conf.secret,
      key: conf.conf.key,
      store: sessionStore,
      cookie: { maxAge: 1000 * 60 * 60 * 12 },
      resave: true,
      saveUninitialized: true
    })
  );

  /* if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.end(err.message);
    });
  } */
};
