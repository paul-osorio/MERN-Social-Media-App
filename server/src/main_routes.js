const express = require("express");
const router = express.Router();
const {
  authRoute,
  postRoute,
  userRoute,
  searchRoute,
  friendRoute,
  messageRoute,
} = require("./routes");

router.use("/", authRoute);
router.use("/posts", postRoute);
router.use("/user", userRoute);
router.use("/search", searchRoute);
router.use("/friend", friendRoute);
router.use("/message", messageRoute);

module.exports = router;
