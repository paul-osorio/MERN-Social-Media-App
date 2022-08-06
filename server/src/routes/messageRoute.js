const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/authentication");

const {
  sendMessage,
  getMyInbox,
  createConvo,
  fetchMessage,
} = require("../controller/messageController");

router.post("/", isAuthenticated, sendMessage);
router.get("/inbox", isAuthenticated, getMyInbox);
router.post("/convo", isAuthenticated, createConvo);
router.get("/:id", isAuthenticated, fetchMessage);

module.exports = router;
