const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  //token = "__stripe_mid=f17abb83-c6a2-4a53-ac82-75b8601d65e1520143; connect.sid=s%3A2qI2xmp4l8flwgNiTjssYXKn3b4zfRum.M6FeF%2FPUbIHKiF%2FIvCun1b8pfr6OqlXzcLFKi46CMUc"
  return token;
};
