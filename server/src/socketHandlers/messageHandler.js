// const ConversationModel = require("../models/conversation");

module.exports.respond = (io, socket) => {
  console.log("A user connected to chat");

  socket.on("setup", (data) => {
    socket.join(data);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (data) => {
    data.data.participants.forEach((participant) => {
      if (participant === data.data.lastMessage.sender) {
        return;
      }
      io.in(participant).emit("message received", {
        lastMessage: data.data.lastMessage,
        roomID: data.roomID,
      });
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(data);
  });
};
