const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    imageUrl: { type: String },
    username: { type: String },
    realname: { type: String },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'userProfile', default: [] }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'userProfile', default: [] }],
    boi: { type: String },
    profession: { type: String }
  },
  { versionKey: false, timestamps: true }
);

const UserProfileModel = new mongoose.model("userProfile", UserProfileSchema);

module.exports = UserProfileModel;
