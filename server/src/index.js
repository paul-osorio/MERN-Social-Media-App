require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
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

connectDB();

app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sessionMiddleware));

app.use("/", require("./routes"));

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
