const mongoose = require("mongoose");

const HighlightSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userProfile", required: true
        },
        imageUrl: { type: String, required: true },
        highlightName: { type: String, required: true }
    },
    { versionKey: false, timestamps: true }
);

const HighlightModel = new mongoose.model("highlight", HighlightSchema);

module.exports = HighlightModel;
