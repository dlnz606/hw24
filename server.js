// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const offerRoutes = require("./routes/offerRoutes");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");

dotenv.config();
const app = express();

app.use(express.json());

// Подключение к MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Роуты
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/messages", messageRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: "Internal server error" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
