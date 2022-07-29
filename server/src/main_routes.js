const express = require("express");
const router = express.Router();
const { authRoute } = require("./routes");

/**
 * This route is used to handle all the authentication
 */
router.use("/", authRoute);

module.exports = router;
