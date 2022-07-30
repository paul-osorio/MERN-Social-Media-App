const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");

const PORT = process.env.PORT || 5000;

module.exports = {
  port: PORT,
  corsOptions: {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
    optionsSuccessStatus: 200,
  },
  sessionMiddleware: {
    name: "vybin_session",
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    },
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URL,
    }),
  },
  connectDB: async () => {
    mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB Connected");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
