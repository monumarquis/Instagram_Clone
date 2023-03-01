require("dotenv").config();
const express = require('express')
const StoryModel = require('./story.model')
const cloudinary = require("cloudinary").v2;
const app = express.Router()

const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto",
    upload_preset: "Instagaram_Media",
};

const uploadImage = (image) => {
    //imgage = > base64
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(image, opts, (error, result) => {
            if (result && result.secure_url) {
                console.log(result.secure_url);
                return resolve(result.secure_url);
            }
            console.log(error.message);
            return reject({ message: error.message });
        });
    });
};

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.post("/", async (req, res) => {
    const { userId, imageUrl } = req.body
    if (!userId || !imageUrl) res.status(404).send({ message: "Request Not found" })
    try {

        uploadImage(imageUrl)
            .then(async (url) => {
                const story = await StoryModel({ user: userId, imageUrl: url })
                story.save()
                return res.status(201).send({ cart, message: "Now Your Story is visible" });
            })
            .catch((err) => {
                return res.status(500).send({ message: err.message });
            });

    }
    catch (err) {
        res.status(404).send({ message: "Request Not found" })
    }
})

app.get("/", async (req, res) => {
    try {
        const Stories = await StoryModel.find({})
        return res.status(200).send(Stories);
    }
    catch (err) {
        res.status(404).send({ message: "Request Not found" })
    }
})

module.exports = app