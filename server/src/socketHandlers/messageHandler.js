const ConversationModel = require("../models/conversation");

module.exports = (io) => {
  const sendMessage = async function (payload) {
    const { from, to, message } = payload;

    try {
      const conversation = await ConversationModel.findOne({
        participants: { $all: [to, from] },
      });

      if (!conversation) {
        const newConversation = new ConversationModel({
          participants: [from, to],
        });

        newConversation.messages.push({
          sender: from,
          content: message,
        });

        await newConversation.save();

        io.to(newConversation._id).emit(`message${to}`, {
          from,
          message,
        });
      } else {
        conversation.messages.push({
          sender: from,
          content: message,
        });
        await conversation.save();

        io.to(conversation._to).emit(`message${to}`, {
          from,
          message,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const createRoom = async function (payload) {
    const { from, to } = payload;

    try {
      const conversation = await ConversationModel.findOne({
        participants: { $all: [to, from] },
      });

      if (!conversation) {
        const newConversation = new ConversationModel({
          participants: [from, to],
        });

        await newConversation.save();
        io.join(newConversation._id);
      }

      io.join(conversation._id);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    sendMessage,
    createRoom,
  };
};
