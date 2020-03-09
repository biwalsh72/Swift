/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const passport = require('passport');
const auth = require('../models/user');
const userController = require('../controllers/user');

const register = router => {
  router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      console.log(err);
      if (err) {
        return res.status(403).json({ err, authUser: user });
      }
      if (!user) {
        return res.status(403).json({ err, authUser: user });
      }
      req.logIn(user, err => {
        if (err) {
          return res.status(403).json({ err, authUser: user });
        }
        res.status(200).json({
          err: null,
          authUser: {
            id: user.id,
            username: user.username,
            password: user.password,
            email: user.email
          }
        });
      });
    })(req, res, next);
  });

  router.get('/logout', (req, res) => {
    req.session.destroy();
    req.logout();
    res.status(200).json({ err: null, authUser: {} });
  });
};

module.exports = register;
