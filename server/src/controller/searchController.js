const UserModel = require("../models/users");
const PostModel = require("../models/post");

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
      }
    ).populate("user");

    res.json({
      users,
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
};
