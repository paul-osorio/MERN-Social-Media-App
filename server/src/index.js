require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { createServer } = require("http");
const MongoStore = require("connect-mongo");

const {
  port,
  corsOptions,
  sessionMiddleware,
  connectDB,
} = require("./config/server.config");

const server = createServer(app);

const expressSession = session(sessionMiddleware);

/**
 * Call passport local strategy
 */
require("./config/passport/local");

/**
 * Connect to mongoDB database from config/server.config
 */
connectDB();

app.use(cors(corsOptions));
/**
 * Point to public folder
 */
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressSession);

/**
 * Initialize passport middleware
 */
app.use(passport.initialize());
app.use(passport.session());
/**
 * Initiate socket io from config
 */

const sio = require("./config/socket-io.config");
sio.init(server, {
  cors: corsOptions,
});

const io = sio.getIO();

/**
 * Use routes from routes.js
 */
app.use("/api/v1/", require("./main_routes"));

const onConnection = require("./socketHandlers");

io.on("connection", (socket) => {
  console.log("A user connected");

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
});

/**
 * Start server using enviroment variable
 * or default port 500
 * */
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
