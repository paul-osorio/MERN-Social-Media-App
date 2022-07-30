require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { Server } = require("http");
const {
  port,
  corsOptions,
  sessionMiddleware,
  connectDB,
} = require("./config/server.config");

const server = new Server(app, {
  cors: corsOptions,
});

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
 * Use routes from routes.js
 */
app.use("/api/v1/", require("./main_routes"));

/**
 * Start server using enviroment variable
 * or default port 500
 * */
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
