const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const POST_DIR = "public/posts";

const postStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, POST_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + Date.now() + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  storage: postStorage,
});

module.exports = {
  postImageMiddleware: imageUpload.array("post_images", 4),
};
