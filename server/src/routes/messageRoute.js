const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/authentication");

const { sendMessage, getMyInbox } = require("../controller/messageController");

router.post("/", isAuthenticated, sendMessage);
router.get("/inbox", isAuthenticated, getMyInbox);
module.exports = router;
