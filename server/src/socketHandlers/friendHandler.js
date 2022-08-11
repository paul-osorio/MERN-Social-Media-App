module.exports.respond = (io, socket) => {
  console.log("Socket connected");

  socket.on("setup", (data) => {
    socket.join(data);
  });

  socket.on("add-friend", (user) => {
    io.in(user.to).emit("sent request", user.from);
  });

  socket.on("reject-friend", (user) => {
    io.in(user.to).emit("rejected request", user.from);
  });

  socket.on("accept-friend", (user) => {
    io.in(user.to).emit("accepted request", user.from);
  });

  socket.off("setup", (data) => {
    socket.leave(data);
  });
};
