const users = {};

module.exports.respond = (io, socket) => {
  socket.on("status", (data) => {
    users[socket.id] = data;
    socket.join("online users");

    io.to("online users").emit("online", Object.values(users));
  });

  socket.on("disconnect", (data) => {
    console.log("user disconnected");
    io.to("online users").emit("offline", Object.values(users));

    delete users[socket.id];
  });
};
