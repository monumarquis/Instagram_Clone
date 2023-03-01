const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userProfile",
      required: true,
    },
    imageUrl: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
  
);

const StoryModel = new mongoose.model("story", StorySchema);

module.exports = StoryModel;
