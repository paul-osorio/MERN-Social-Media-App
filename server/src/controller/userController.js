const UserModel = require("../models/users");

const getUserDetails = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id);

    const userData = {
      nameFirst: user.nameFirst,
      nameLast: user.nameLast,
      email: user.email,
      gender: user.gender,
      profile: user.profile,
      avatar: user.avatar,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getUserDetails,
};
