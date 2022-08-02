const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const PROFILE_DIR = "public/profile";

const profileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PROFILE_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + Date.now() + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  storage: profileStorage,
});

module.exports = {
  profileUploadMiddleware: imageUpload.single("profile"),
};
