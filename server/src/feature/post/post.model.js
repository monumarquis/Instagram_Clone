const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userProfile",
      required: true,
    },
    imageUrl: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'userProfile', default: [] }],
    description: { type: String, },
    location: { type: String, },
  },
  { versionKey: false, timestamps: true }
);

const PostModel = new mongoose.model("post", PostSchema);

module.exports = PostModel;
