const UserModel = require("../models/users");
const FriendModel = require("../models/friends");

const AddFriend = async (req, res) => {
  const userID = req.user._id;
  const friendID = req.body.friendID;

  try {
    const exists = await FriendModel.findOne({
      $or: [
        { requester: userID, recipient: friendID },
        { requester: friendID, recipient: userID },
      ],
    });

    if (exists) {
      return res.status(400).json({
        status: exists.status,
      });
    } else {
      const newFriend = await FriendModel.create({
        requester: userID,
        recipient: friendID,
        status: 0,
      });

      //update user friend list
      const user = await UserModel.findByIdAndUpdate(userID, {
        $push: { friends: newFriend._id },
      });
      //update friend user list
      const friend = await UserModel.findByIdAndUpdate(friendID, {
        $push: { friends: newFriend._id },
      });

      return res.status(200).json({
        message: "Friend request sent",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const AcceptFriend = async (req, res) => {
  const userID = req.user._id;
  const friendID = req.body.friendID;
  try {
    const friend = await FriendModel.findOneAndUpdate(
      {
        $or: [
          { requester: userID, recipient: friendID },
          { requester: friendID, recipient: userID },
        ],
      },
      {
        status: 1,
      }
    );
    if (!friend) {
      return res.status(400).json({
        message: "No friend found",
      });
    } else {
      return res.status(200).json({
        message: "Friend found",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const RejectFriend = async (req, res) => {
  const userID = req.user._id;
  const friendID = req.body.friendID;
  try {
    const friend = await FriendModel.findOneAndRemove({
      $or: [
        { requester: userID, recipient: friendID },
        { requester: friendID, recipient: userID },
      ],
    });

    if (friend) {
      await UserModel.updateMany(
        {
          _id: { $in: [userID, friendID] },
        },
        {
          $pull: { friends: friend._id },
        }
      );

      return res.status(200).json({
        message: "You have rejected this friend",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const GetFriend = async (req, res) => {
  const userID = req.user._id;
  const friendId = req.query.friendID;

  try {
    const user = await FriendModel.findOne({
      $or: [
        { requester: userID, recipient: friendId },
        { requester: friendId, recipient: userID },
      ],
    });

    if (!user) {
      return res.status(400).json({
        message: "No friend found",
      });
    } else {
      return res.status(200).json({
        message: "Friend found",
        friend: user,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  AddFriend,
  RejectFriend,
  AcceptFriend,
  GetFriend,
};
