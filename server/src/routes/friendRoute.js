const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middleware/authentication");

const {
  AddFriend,
  DeclineFriend,
  AcceptFriend,
} = require("../controller/friendController");

router.post("/add", isAuthenticated, AddFriend);
router.post("/decline", isAuthenticated, DeclineFriend);
router.post("/accept", isAuthenticated, AcceptFriend);

module.exports = router;
