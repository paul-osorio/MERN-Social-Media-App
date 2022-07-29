const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middleware/authentication");

const {
  userRegister,
  userLogin,
  userLogout,
} = require("../controller/authController");

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/logout", isAuthenticated, userLogout);

module.exports = router;
