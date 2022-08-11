module.exports.respond = (io, socket) => {
  socket.on("likePost", (id) => {
    io.emit("likePost", id);
  });
};
