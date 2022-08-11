const UserModel = require("../models/users");
const PostModel = require("../models/post");
const FriendModel = require("../models/friends");

const searchAll = async (req, res) => {
  const q = req.query.q;
  try {
    const users = await UserModel.find(
      {
        $text: { $search: q },
      },
      {
        score: { $meta: "textScore" },
      },
      {
        sort: { score: { $meta: "textScore" } },
        limit: 3,
      }
    );
    const posts = await PostModel.find(
      {
        $text: { $search: q, $diacriticSensitive: false },
      },
      {
        score: { $meta: "textScore" },
      },
      {
        sort: { score: { $meta: "textScore" } },
        limit: 5,
      }
    ).populate("user");

    const userArray = [];

    for (let i = 0; i < users.length; i++) {
      const friendStatus = await FriendModel.findOne({
        $or: [
          {
            requester: req.user._id,
            recipient: users[i]._id,
          },
          {
            requester: users[i]._id,
            recipient: req.user._id,
          },
        ],
      });

      userArray.push({
        ...users[i]._doc,
        friendStatus,
        myId: req.user._id,
      });
    }

    res.json({
      users: userArray,
      posts,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const searchPeople = async (req, res) => {
  const q = req.query.q;
  try {
    const users = await UserModel.find(
      {
        $text: { $search: q },
      },
      {
        score: { $meta: "textScore" },
      },
      {
        sort: { score: { $meta: "textScore" } },
      }
    );

    const userArray = [];

    for (let i = 0; i < users.length; i++) {
      const friendStatus = await FriendModel.findOne({
        $or: [
          {
            requester: req.user._id,
            recipient: users[i]._id,
          },
          {
            requester: users[i]._id,
            recipient: req.user._id,
          },
        ],
      });

      userArray.push({
        ...users[i]._doc,
        friendStatus,
        myId: req.user._id,
      });
    }

    res.json({
      users: userArray,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const searchPosts = async (req, res) => {
  const q = req.query.q;
  try {
    const posts = await PostModel.find(
      {
        $text: { $search: q },
      },
      {
        score: { $meta: "textScore" },
      },
      {
        sort: { score: { $meta: "textScore" } },
      }
    ).populate("user");

    res.json({
      posts,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  searchAll,
  searchPeople,
  searchPosts,
};
