const mongoose = require("mongoose");

module.exports = {
  port: process.env.PORT,
  corsOptions: {
    origin: ["http://localhost:3000"],
    credentials: true,
  },
  sessionMiddleware: {
    name: "socmed-session",
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    },
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
