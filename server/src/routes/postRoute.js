const express = require("express");
const router = express.Router();
const { postImageMiddleware } = require("../middleware/postImages");
const isAuthenticated = require("../middleware/authentication");

const {
  createPost,
  getPosts,
  likePost,
  unlikePost,
  checkIfLiked,
  getLikeCount,
  sharePost,
  getOnePost,
  getShareCount,
  commentPost,
  replyComment,
} = require("../controller/postController");

router.post("/comment", isAuthenticated, commentPost);
router.post("/comment/reply", isAuthenticated, replyComment);
router.post("/like", isAuthenticated, likePost);
router.get("/like/:id", isAuthenticated, getLikeCount);
router.post("/unlike", isAuthenticated, unlikePost);
router.post("/islike", isAuthenticated, checkIfLiked);
router.post("/share", isAuthenticated, sharePost);
router.get("/share/:id", isAuthenticated, getShareCount);
router.post("/", isAuthenticated, postImageMiddleware, createPost);
router.get("/one/:id", getOnePost);

router.get("/", getPosts);

module.exports = router;
