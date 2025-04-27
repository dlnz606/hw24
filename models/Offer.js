const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  skillOffered: String,
  skillRequested: String,
  offeredBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Offer", offerSchema);
