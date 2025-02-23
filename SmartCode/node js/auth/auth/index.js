var GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1089346718337-nu0q1e1fvibtl13fuu5h5l7for1h87il.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
    }
  )
);
