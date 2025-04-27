const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  text: String,
  timestamp: Date,
  from: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  messages: [messageSchema], // Embedded document
});

module.exports = mongoose.model("User", userSchema);
