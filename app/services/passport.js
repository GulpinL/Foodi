const passport = require('passport');
const LocalStrategy = require('passport-local');
const authenticationService = require('../services/authenticationService');
// const User = require("../models/userModel");

passport.use(new LocalStrategy({usernameField: 'email'}, async function verify(username, password, cb) {
  console.log('verify' + username + password);
  const user = await authenticationService.verifyUser(username, password);//day laf cho import service de su dung  : verifyUser
  if (user) {
    console.log('USER IS username password :',user);
    return cb(null, user);
  }
  return cb(null, false);
}));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { _id: user._id, email: user.email });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

module.exports = passport;