const User = require('../models/users-model');

const passportHandlers = {
  login: (name, password, done) => {
    console.log('name',name);
    User.findOne({name}, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {message: 'User not found'});
      }
      if (user.password !== password) {
        return done(null, false, {message: 'Incorrect password'});
      }
      return done(null, user);
    });
  },
  serializeUser: (user, done) => done(null, user),
  deserializeUser: (user, done) => done(null, user),
  validatedUser: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.sendStatus(401);
  }
}

module.exports = passportHandlers;