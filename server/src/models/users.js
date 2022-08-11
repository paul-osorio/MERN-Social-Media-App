const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FriendSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const userSchema = new Schema(
  {
    nameFirst: {
      type: String,
      required: true,
      trim: true,
    },
    nameLast: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    avatar: {
      type: String,
      required: false,
    },
    profile: {
      type: String,
      required: false,
    },
    post: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    friends: [FriendSchema],
  },
  {
    timestamps: true,
  }
);

userSchema.index({
  nameFirst: "text",
  nameLast: "text",
  email: "text",
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
