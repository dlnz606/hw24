const Message = require("../models/Message");

// Получить все сообщения
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find()
      .populate("from", "username")
      .populate("to", "username");
    res.json(messages);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Создать сообщение
exports.createMessage = async (req, res) => {
  try {
    const { text, to } = req.body;
    const message = new Message({
      text,
      from: req.user.userId,
      to,
    });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
