require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const app = express();
const User = require("./feature/user/user.route");
const Post = require("./feature/post/post.route");
const Comment = require("./feature/comment/comment.route");
const Story = require('./feature/story/story.route')
const Highlight = require('./feature/highlight/highlight.route')
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json({limit:"500mb"}));
app.use(express.urlencoded({ extended: true , limit:"500mb"}));

app.use("/users", User);
app.use("/posts", Post);
app.use("/comments", Comment);
app.use("/story",Story)
app.use("/highlight",Highlight)

app.get("/", (req, res) => {
  res.send("This is  My Instagaram Clone Backend");
});

app.listen(PORT, async () => {
  await connect();
});
