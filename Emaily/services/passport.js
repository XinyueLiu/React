const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//pull out user model class
const User = mongoose.model("users");

//encode user id inside the cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//decode user id inside the cookie
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    // (accessToken, refreshToken, profile, done) => {
    //   //below is a promise
    //   User.findOne({ googleId: profile.id }).then(existingUser => {
    //     if (existingUser) {
    //       // we already have a record with the given profile ID
    //       done(null, existingUser); //done(error, user record);
    //     } else {
    //       // we don't have a user record with this ID, make a new record
    //       new User({ googleId: profile.id })
    //         .save()
    //         .then(user => done(null, user));
    //     }
    //   });
    // }
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }
      
      const user = new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
