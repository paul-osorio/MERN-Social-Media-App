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

// const sio = require("./config/socket-io.config");
// sio.init(server, {
//   cors: corsOptions,
// });

// const io = sio.getIO();

const socket = require("socket.io");

const io = socket(server, {
  cors: corsOptions,
});

/**
 * Use routes from routes.js
 */
app.use("/api/v1/", require("./main_routes"));

// const onConnection = require("./socketHandlers");
const messageNamespace = require("./socketHandlers/messageHandler");
const globalNamespace = require("./socketHandlers/globalHandler");

var chat = io.of("/chat").on("connection", (socket) => {
  messageNamespace.respond(chat, socket);
});

var main = io.on("connection", (socket) => {
  globalNamespace.respond(main, socket);
});

/**
 * Start server using enviroment variable
 * or default port 500
 * */
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
