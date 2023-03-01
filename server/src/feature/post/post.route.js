require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const express = require("express");
const app = express.Router();
const PostModel = require("./post.model");
const UserProfileModel = require("../user/user.profile.model");
const CommentModel = require("../comment/comment.model");
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
        // console.log(result.secure_url);
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


// get All Posts
app.get("/", async (req, res) => {
  let post = await PostModel.find().populate(["user", "likes"])
  return res.status(200).send({ randomPost: post });
});

// particular user's all post

app.get("/userPost", async (req, res) => {
  const { username } = req.headers
  console.log(username);
  const userprofile = await UserProfileModel.findOne({ username })
  if (!username) return res.status(404).send({ message: "Request Not Found" });
  let post = await PostModel.find({ user: userprofile.id }).populate(["user", "likes"])
  return res.status(200).send({ post });
});

// upload image
app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const { imageUrl, desc = "", userId, location } = req.body;
    if (!imageUrl || !userId)
      return res.status(404).send({ message: "Please Select Image" });
    uploadImage(imageUrl)
      .then(async (url) => {
        let post = await PostModel({ user: userId, imageUrl: url, description: desc, location })
        post.save()
        return res.status(201).send({ message: "Post Uploaded" });
      })
      .catch((err) => {
        return res.status(500).send({ message: err.message });
      });
  } catch (err) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

//like / dislike a post

app.put("/:id/like", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      return res.status(200).send("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      return res.status(200).send("The post has been disliked");
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

// delete post
app.delete("/:postid", async (req, res) => {
  const { postid } = req.params
  console.log(req.params)
  if (!postid) return res.status(500).send({ message: "Request Not Found" })
  try {
    const post = await PostModel.findByIdAndDelete(postid)
    const comment = await CommentModel.deleteMany({ post: postid })
    return res.status(200).send({ post, comment ,message:"Post Deleted"});
  } catch (err) {
    return res.status(500).send(err);
  }
})

module.exports = app;
