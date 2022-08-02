const PostModel = require("../models/post");
const UserModel = require("../models/users");

const createPost = async (req, res) => {
  const imagesFiles = [];
  /**
   * Get all images filename and store them in an array
   */
  if (req.files) {
    for (let i = 0; i < req.files.length; i++) {
      imagesFiles.push(req.files[i].filename);
    }
  }

  const data = {
    content: req.body.content,
    images: imagesFiles,
    user: req.user._id,
  };

  try {
    const post = await PostModel.create(data);

    const user = await UserModel.findById(req.user._id);
    user.post.push(post);

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find({})
      .populate("user")
      .sort({ createdAt: -1 })
      .populate("user");

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createPost,
  getPosts,
};
