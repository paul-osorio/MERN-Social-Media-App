const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentReply = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    replies: [commentReply],
  },
  {
    timestamps: true,
  }
);

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
    comments: [commentSchema],
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
