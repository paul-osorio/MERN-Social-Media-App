require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const http = require("http");
const {
  port,
  corsOptions,
  sessionMiddleware,
  connectDB,
} = require("./config/server.config");

const server = http.createServer(app);

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
app.use(session(sessionMiddleware));

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

/**
 * Use routes from routes.js
 */
app.use("/api/v1/", require("./main_routes"));

sio.getIO().on("connection", (socket) => {
  console.log("New client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

/**
 * Start server using enviroment variable
 * or default port 500
 * */
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
