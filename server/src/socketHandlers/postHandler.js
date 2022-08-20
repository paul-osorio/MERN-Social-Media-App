module.exports.respond = (io, socket) => {
  socket.on("likePost", (id) => {
    io.emit("likePost", id);
  });

  socket.on("new comment", (data) => {
    io.emit("new comment", data);
  });
};
