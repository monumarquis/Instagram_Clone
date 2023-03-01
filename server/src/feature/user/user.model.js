const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    username: { type: String, required: true, unique: true },
    fullname: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const UserModel = new mongoose.model("user", UserSchema);

module.exports = UserModel;
