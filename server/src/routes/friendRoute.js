const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middleware/authentication");

const {
  AddFriend,
  RejectFriend,
  AcceptFriend,
  GetFriend,
  GetMyFriends,
} = require("../controller/friendController");
router.get("/all", isAuthenticated, GetMyFriends);
router.get("/", isAuthenticated, GetFriend);

router.post("/add", isAuthenticated, AddFriend);
router.post("/reject", isAuthenticated, RejectFriend);
router.post("/accept", isAuthenticated, AcceptFriend);

module.exports = router;
