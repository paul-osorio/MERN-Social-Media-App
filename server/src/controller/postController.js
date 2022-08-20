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
      .sort({ createdAt: -1 })
      .populate("user", "nameFirst nameLast avatar profile email");

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

const likePost = async (req, res) => {
  try {
    const post = await PostModel.findById(req.body.postId);
    const user = await UserModel.findById(req.user._id);

    post.likes.push(user);
    user.likes.push(post);

    await post.save();
    await user.save();

    res.status(200).json("liked");
  } catch (error) {
    res.status(500).json(error);
  }
};

const unlikePost = async (req, res) => {
  try {
    const post = await PostModel.findById(req.body.postId);
    const user = await UserModel.findById(req.user._id);

    post.likes.pull(user);
    user.likes.pull(post);

    await post.save();
    await user.save();

    res.status(200).json("unliked");
  } catch (error) {
    res.status(500).json(error);
  }
};

const checkIfLiked = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      _id: req.user._id,
      likes: req.body.postId,
    });

    if (user) {
      res.status(200).json("liked");
    } else {
      res.status(200).json("unliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getLikeCount = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    const likes = post.likes.length;

    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getShareCount = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    const shares = post.shares.length;

    res.status(200).json(shares);
  } catch (error) {
    res.status(500).json(error);
  }
};

const sharePost = async (req, res) => {
  try {
    const post = await PostModel.create({
      shareID: req.body.postId,
      user: req.user._id,
      content: req.body.content,
    });

    const sharedPost = await PostModel.findById(req.body.postId);

    sharedPost.shares.push(req.user._id);

    await sharedPost.save();

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOnePost = async (req, res) => {
  try {
    //get post and order comments by date
    const post = await PostModel.findOne({
      _id: req.params.id,
    })
      .populate("user", "nameFirst nameLast avatar profile email")
      .populate({
        path: "comments",
        populate: {
          path: "user",
          select: "nameFirst nameLast avatar profile email",
        },
      })
      .populate({
        path: "comments.replies",
        populate: {
          path: "user",

          select: "nameFirst nameLast avatar profile email",
        },
      });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const commentPost = async (req, res) => {
  const { content, postId } = req.body;
  const user = req.user._id;

  try {
    const post = await PostModel.findById(postId);
    post.comments.push({ content, user });
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

const replyComment = async (req, res) => {
  const { content, commentId, postId } = req.body;
  const user = req.user._id;

  try {
    const post = await PostModel.findById(postId);
    const comment = post.comments.id(commentId);
    comment.replies.push({ content, user });
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
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
};
