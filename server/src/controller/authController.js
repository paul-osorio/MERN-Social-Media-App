const UserModel = require("../models/users");
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");

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
  passport.authenticate("local", async (err, user, info) => {
    try {
      if (err) {
        /**
         * Create a new error object and pass it to the next function
         */
        const error = new Error("Something went wrong");
        return next(error);
      }

      if (!user) {
        /**
         * If user does not exist, return error
         * and if user has entered wrong password, return error
         */
        return res.status(401).json({
          message: info.message,
        });
      }

      req.logIn(user, async (error) => {
        if (error) return next(error);
        return res.status(200).json({
          message: "User logged in successfully",
        });
      });
    } catch (err) {
      /**
       * if everything fails, return error
       */
      return next(err);
    }
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

const checkEmail = async (req, res) => {
  /**
   * this function checks if the email is already taken
   */
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (user) {
      /**
       * if user exists, return error
       */
      return res.status(400).json({
        message: "Email already taken",
      });
    } else {
      /**
       * if user does not exist, return success message
       */
      return res.status(200).json({
        message: "Email is available",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const userSession = (req, res) => {
  /**
   * this function checks if the user is logged in
   */
  if (req.user) {
    return res.status(200).json({
      message: "User is logged in",
    });
  } else {
    return res.status(401).json({
      message: "User is not logged in",
    });
  }
};

module.exports = {
  userRegister,
  userLogin,
  userLogout,
  checkEmail,
  userSession,
};
