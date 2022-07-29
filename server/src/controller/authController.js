const UserModel = require("../models/users");
const bcrypt = require("bcrypt");
const passport = require("passport");

const userRegister = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    /**
     * Check if user already exists
     */
    const userExists = await UserModel.findOne({ email: user.email });

    if (userExists) {
      /**
       * If user exists, return error
       */
      return res.status(400).json({
        message: "Email already taken",
      });
    } else {
      /**
       * If user does not exist, hash password and save user
       * to database
       * */
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);

      /**
       * Reassign hashpassword to password from user model
       */
      user.password = hash;

      /**
       * Save user to database
       */
      const newUser = await user.save();

      res.status(201).json({
        message: "User created successfully",
        data: newUser,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const userLogin = async (req, res, next) => {
  /**
   * USER AUTHENTICATION USING PASSPORT LOCAL STRATEGY
   */
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      /**
       * If error, return error
       */
      return next(err);
    }
    if (!user) {
      /**
       * If user does not exist, return error
       * */
      return res.json({
        message: info.message,
      });
    }
    /**
     * If user exists, log user in
     * */
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json({
        message: "User logged in successfully",
        data: user,
      });
    });
  })(req, res, next);
};

const userLogout = (req, res) => {
  req.logOut(function (err) {
    if (err) {
      /**
       * if failed to logout user return error
       */
      return res.status(500).json({
        message: err.message,
      });
    }
    /**
     * If logout successful, return success message
     * */
    return res.status(200).json({
      message: "User logged out",
    });
  });
};

module.exports = {
  userRegister,
  userLogin,
  userLogout,
};
