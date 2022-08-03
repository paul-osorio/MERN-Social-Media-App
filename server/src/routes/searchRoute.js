const express = require("express");
const router = express.Router();
const {
  searchAll,
  searchPeople,
  searchPosts,
} = require("../controller/searchController");

router.get("/all", searchAll);
router.get("/people", searchPeople);
router.get("/posts", searchPosts);

module.exports = router;
