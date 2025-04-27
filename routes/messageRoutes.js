const express = require("express");
const {
  createMessage,
  getAllMessages,
} = require("../controllers/messageController");
const router = express.Router();

router.get("/", getAllMessages);
router.post("/", createMessage);

module.exports = router;
