const socketio = require("socket.io");

let io;

module.exports = {
  init: (server, config) => {
    io = socketio(server, config);
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error("Socket.io not initialized");
    }
    return io;
  },
};
