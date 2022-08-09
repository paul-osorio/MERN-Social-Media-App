const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middleware/authentication");

const {
  getUserDetails,
  getUserPartialDetail,
} = require("../controller/userController");

router.get("/", isAuthenticated, getUserDetails);
router.post("/partial", isAuthenticated, getUserPartialDetail);

module.exports = router;
