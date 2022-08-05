const ConversationtModel = require("../models/conversation");

const sendMessage = async (req, res) => {
  const userID = req.user._id;
  const friendID = req.body.friendID;

  try {
    const conversation = await ConversationtModel.findOne({
      participants: { $all: [userID, friendID] },
    });

    if (!conversation) {
      const newConversation = new ConversationtModel({
        participants: [userID, friendID],
      });

      newConversation.messages.push({
        sender: userID,
        content: req.body.content,
      });

      await newConversation.save();

      return res.status(200).json({
        message: "Message sent",
      });
    } else {
      conversation.messages.push({
        sender: userID,
        content: req.body.content,
      });
      await conversation.save();
      return res.status(200).json({
        message: "Message sent",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "hey",
    });
  }
};

const getMyInbox = async (req, res) => {
  try {
    const userID = req.user._id;
    const conversations = await ConversationtModel.find(
      {
        participants: { $all: [userID] },
      },
      {
        messages: { $slice: -1 },
      }
    )
      .sort({ "messages.createdAt": -1 })
      .populate("participants", "nameFirst nameLast email avatar profile")
      .populate("messages.sender", "avatar profile");

    const convo = [];
    for (let i = 0; i < conversations.length; i++) {
      const participant = conversations[i].participants.filter(
        (participant) => participant._id.toString() !== userID.toString()
      );
      convo.push({
        id: conversations[i]._id,
        participant: participant[0],
        messages: conversations[i].messages,
        isRead: conversations[i].isRead,
      });
    }

    return res.status(200).json({
      conversations: convo,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  sendMessage,
  getMyInbox,
};
