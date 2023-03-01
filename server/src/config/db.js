require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8001;

function connect() {
  mongoose.set("strictQuery", false);
  return mongoose.connect(process.env.DB_URL, () => {
    console.log("Connected to MongoDB");
    console.log(`running port on http://localhost:${PORT}`);
  });
}

module.exports = connect;
