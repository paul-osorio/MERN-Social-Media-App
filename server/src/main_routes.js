const express = require("express");
const router = express.Router();
const { authRoute, postRoute } = require("./routes");

router.use("/", authRoute);
router.use("/posts", postRoute);

module.exports = router;
