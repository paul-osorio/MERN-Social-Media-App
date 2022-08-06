const ConversationModel = require("../models/conversation");

const createConvo = async (req, res) => {
  const myId = req.user._id;
  const friendId = req.body.friendId;

  try {
    const conversation = await ConversationModel.findOne({
      participants: { $all: [myId, friendId] },
    });

    if (!conversation) {
      const newConversation = new ConversationModel({
        participants: [myId, friendId],
      });

      await newConversation.save();

      return res.status(200).json({
        roomID: newConversation._id,
        message: "Conversation created",
      });
    } else {
      return res.status(200).json({
        roomID: conversation._id,
        message: "Conversation already exists",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const sendMessage = async (req, res) => {
  const userID = req.user._id;

  try {
    const conversation = await ConversationModel.findById(req.body.roomID);

    if (!conversation) {
      return res.status(404).json({
        message: "Conversation not found",
      });
    }

    const newMessage = {
      sender: userID,
      content: req.body.message,
    };

    conversation.messages.push(newMessage);
    conversation.isRead = false;
    await conversation.save();

    //get the last message
    const lastMessage = conversation.messages[conversation.messages.length - 1];

    //convert each participant id to string
    const participants = conversation.participants.map((participant) => {
      return participant._id;
    });

    return res.status(200).json({ lastMessage, participants });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const fetchMessage = async (req, res) => {
  try {
    //get conversation and limit to last 10 messages
    const conversation = await ConversationModel.findOne(
      {
        _id: req.params.id,
      },
      { messages: { $slice: -20 } }
    );

    return res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getMyInbox = async (req, res) => {
  try {
    const userID = req.user._id;
    const conversations = await ConversationModel.find(
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
  createConvo,
  fetchMessage,
};
