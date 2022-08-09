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

      //get participants info without myId

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
      isRead: false,
    };

    conversation.messages.push(newMessage);
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
    const myId = req.user._id;

    const conversations = await ConversationModel.find(
      {
        participants: { $all: [myId] },
      },
      {
        messages: { $slice: -1 },
        participants: { $elemMatch: { $ne: myId } },
      }
    )
      .populate("participants", "nameFirst nameLast avatar email profile")
      .sort({ updatedAt: -1 });

    //filter out conversations that have messages
    const filteredConversations = conversations.filter((conversation) => {
      return conversation.messages.length > 0;
    });

    return res.status(200).json(filteredConversations);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const readMessage = async (req, res) => {
  try {
    //get last message in conversation
    const conversation = await ConversationModel.findById(req.query.id);

    if (!conversation) {
      return res.status(404).json({
        message: "Conversation not found",
      });
    }

    //get last message in conversation
    const lastMessage = conversation.messages[conversation.messages.length - 1];
    const sender = req.query.sender_id;
    const receiver = req.user._id;

    //check if message is read
    if (lastMessage.isRead) {
      return res.status(200).json({
        message: "Message already read",
      });
    }

    if (sender.toString() === receiver.toString()) {
      return res.status(200).json({
        message: "You can't read your own message",
      });
    } else {
      //update message to read

      conversation.messages.id(req.query.message_id).isRead = true;
      await conversation.save();

      return res.status(200).json({
        message: "Message read",
      });
    }
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
  readMessage,
};
