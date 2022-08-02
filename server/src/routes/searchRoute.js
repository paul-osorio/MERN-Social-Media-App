const express = require("express");
const router = express.Router();
const { searchAll } = require("../controller/searchController");

router.get("/All", searchAll);

module.exports = router;
