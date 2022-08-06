const UserModel = require("../models/users");

const getUserDetails = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id).select(
      "-password -__v -post"
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getUserDetails,
};
