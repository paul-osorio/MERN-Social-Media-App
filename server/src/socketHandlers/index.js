const io = require("../config/socket-io.config").getIO();
const ConversationModel = require("../models/conversation");

const { sendMessage, createRoom } = require("./messageHandler")(io);

const onConnection = (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => console.log("user disconnected"));

  socket.on("message", sendMessage);
  //   socket.on("create-room", createRoom);

  socket.on("create-room", async (data) => {
    const { from, to } = data;

    try {
      const conversation = await ConversationModel.findOne({
        participants: { $all: [to, from] },
      });

      if (!conversation) {
        const newConversation = new ConversationModel({
          participants: [from, to],
        });

        await newConversation.save();

        socket.join(newConversation._id);
      }

      socket.join(conversation._id);
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports = onConnection;
