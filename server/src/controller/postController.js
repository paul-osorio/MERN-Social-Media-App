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
    const posts = await PostModel.find({});

    const postArray = [];

    for (let i = 0; i < posts.length; i++) {
      const user = await UserModel.findById(posts[i].user);
      postArray.push({
        _id: posts[i]._id,
        content: posts[i].content,
        images: posts[i].images,
        author: {
          nameFirst: user.nameFirst,
          nameLast: user.nameLast,
          avatar: user.avatar,
          profile: user.profile,
        },
        createdAt: posts[i].createdAt,
      });
    }

    //sort posts by createdAt
    postArray.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    res.status(200).json(postArray);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createPost,
  getPosts,
};
