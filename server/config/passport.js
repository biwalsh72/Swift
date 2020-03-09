const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const auth = require('../models/user');

exports.configPassport = app => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'username'
      },
      (username, password, done) => {
        auth.login(username, password, done);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    auth.getUserById(id, done);
  });

  app.use(passport.initialize());
  app.use(passport.session());
};
