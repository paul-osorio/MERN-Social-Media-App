const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendsSchema = new Schema(
  {
    requester: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: [
        0, //add friend
        1, //requested
        2, //pending
        3, //friends
      ],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const friendsModel = mongoose.model("Friend", friendsSchema);
module.exports = friendsModel;
