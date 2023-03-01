require("dotenv").config();
const express = require('express')
const HighlightModel = require('./highlight.models')
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

app.get("/", async (req, res) => {
    let { userId } = req.body;
    if (!userId) res.status(404).send({ message: "Request Not found" })
    try {

        const Highlight = await HighlightModel.find({ user: userId })
        res.status(201).send({ message: "Highlight saved", Highlight })
    }
    catch (err) {
        res.status(404).send({ message: "Request Not found" })
    }
})

app.post('/', async (req, res) => {
    const { imageUrl, highlightName, userId } = req.body
    if (!imageUrl || !highlightName || !userId) res.status(404).send({ message: "Request Not found" })
    
    try {
        uploadImage(imageUrl)
            .then(async (url) => {
                const Highlight = await HighlightModel({ imageUrl: url, highlightName, user: userId })
                Highlight.save()
                res.status(201).send({ message: "Highlight saved" })
            })
            .catch((err) => {
                return res.status(500).send({ message: err.message });
            });
    }
    catch (err) {
        res.status(404).send({ message: "Request Not found" })
    }
})

module.exports = app