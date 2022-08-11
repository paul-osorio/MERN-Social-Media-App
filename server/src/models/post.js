const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: false,
    },
    images: {
      type: [String],
      required: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    shares: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    shareID: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);

postSchema.index({
  content: "text",
  images: "text",
});

const PostModel = mongoose.model("Post", postSchema);
module.exports = PostModel;
