const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middleware/authentication");

const { getUserDetails } = require("../controller/userController");

router.get("/", isAuthenticated, getUserDetails);

module.exports = router;
