const UserModel = require("../models/users");
const FriendModel = require("../models/friends");

// const io = require("../config/socket-io.config").getIO();

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

      // io.emit("addFriend", {
      //   from: userID,
      //   to: friendID,
      // });

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
      // io.emit("acceptFriend", {
      //   from: userID,
      //   to: friendID,
      // });

      const userA = await UserModel.findById(userID);
      const userB = await UserModel.findById(friendID);

      userA.friends.push({
        id: friendID,
      });
      userB.friends.push({
        id: userID,
      });

      await userA.save();
      await userB.save();

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

      // io.emit("rejectFriend", {
      //   from: userID,
      //   to: friendID,
      // });

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

const GetMyFriends = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(400).json({
        message: "No friend found",
      });
    } else {
      const friendList = [];
      for (let i = 0; i < user.friends.length; i++) {
        const friend = await UserModel.findById(user.friends[i].id).select(
          "nameLast nameFirst email friends avatar profile"
        );
        friendList.push(friend);
      }

      return res.status(200).json({
        message: "Friend found",
        friends: friendList,
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
  GetMyFriends,
};
