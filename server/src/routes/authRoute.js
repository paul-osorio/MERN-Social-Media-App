const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middleware/authentication");

const {
  userRegister,
  userLogin,
  userLogout,
  checkEmail,
  userSession,
} = require("../controller/authController");

router.get("/session", userSession);
router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/logout", isAuthenticated, userLogout);
router.post("/checkEmail", checkEmail);

module.exports = router;
