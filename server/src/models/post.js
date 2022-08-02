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
