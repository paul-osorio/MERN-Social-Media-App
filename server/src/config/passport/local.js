const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const UserModel = require("../../models/users");
const bcrypt = require("bcrypt");

/**
 * Define local strategy for passport
 */

const local = new LocalStrategy(
  { usernameField: "email" },
  async (email, password, done) => {
    try {
      /**
       * Find user by email address
       */
      const user = await UserModel.findOne({ email });
      if (!user) {
        /**
         * If user does not exist, return error
         * */
        return done(null, false, { message: "User not found" });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        /**
         * If password is invalid, return error
         * */
        return done(null, false, { message: "Incorrect password" });
      }
      /**
       * If password is valid, return user
       * */
      return done(null, user);
    } catch (err) {
      /**
       * catch the rest of the errors and return error
       */
      return done(err);
    }
  }
);

/**
 * Serialize user to session
 */
const serializeUser = (user, done) => {
  done(null, { _id: user._id });
};

/**
 * Deserialize user from session
 */
const deserializeUser = (id, done) => {
  UserModel.findOne({ _id: id }, "email", (err, user) => {
    done(null, user);
  });
};

/**
 * Passport middleware
 */
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);
passport.use(local);

module.exports = passport;
