const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post", required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userProfile", required: true
        },
        comment: { type: String, required: true }
    },
    { versionKey: false, timestamps: true }
);

const CommentModel = new mongoose.model("comment", CommentSchema);

module.exports = CommentModel;
