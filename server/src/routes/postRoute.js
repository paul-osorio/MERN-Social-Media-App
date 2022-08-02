const express = require("express");
const router = express.Router();
const { postImageMiddleware } = require("../middleware/postImages");
const isAuthenticated = require("../middleware/authentication");

const { createPost, getPosts } = require("../controller/postController");

router.post("/", isAuthenticated, postImageMiddleware, createPost);
router.get("/", getPosts);

module.exports = router;
