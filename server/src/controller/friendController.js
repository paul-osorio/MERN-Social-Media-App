const UserModel = require("../models/users");
const FriendModel = require("../models/friends");

const AddFriend = async (req, res) => {
  const recipientID = req.body.recipientID;
  const requesterID = req.user._id;
  try {
    const friend = await FriendModel.findOne({
      $or: [
        {
          requester: requesterID,
          recipient: recipientID,
        },
        {
          requester: recipientID,
          recipient: requesterID,
        },
      ],
    });
    if (friend) {
      return res.status(400).json({
        message: "You already have this friend",
      });
    } else {
      const addFriend = await FriendModel.create({
        requester: requesterID,
        recipient: recipientID,
      });

      if (addFriend) {
        await UserModel.findByIdAndUpdate(recipientID, {
          $push: {
            friend: addFriend._id,
          },
        });

        return res.status(200).json({
          message: "You successfully added this friend",
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const DeclineFriend = async (req, res) => {
  const requesterID = req.body.requesterID;

  try {
    const friend = await FriendModel.findOneAndDelete({
      requester: requesterID,
      recipient: req.user._id,
    });

    if (friend) {
      const userfriend = await UserModel.findByIdAndUpdate(requesterID, {
        $pull: {
          friend: friend._id,
        },
      });

      if (userfriend) {
        return res.status(200).json({
          message: "You successfully declined this friend",
        });
      }
    } else {
      return res.status(400).json({
        message: "You don't have this friend",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const AcceptFriend = async (req, res) => {
  const requesterID = req.body.requesterID;
  try {
    const friend = await FriendModel.findOneAndUpdate(
      {
        requester: requesterID,
        recipient: req.user._id,
      },
      {
        status: 3,
      }
    );
    if (friend) {
      return res.status(200).json({
        message: "You successfully accepted this friend",
      });
    } else {
      return res.status(400).json({
        message: "You don't have this friend",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  AddFriend,
  DeclineFriend,
  AcceptFriend,
};
