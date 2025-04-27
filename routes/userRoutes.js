// routes/userRoutes.js
const express = require("express");
const { body } = require("express-validator");
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const validate = require("../middlewares/validate");
const router = express.Router();

// Получить всех пользователей
router.get("/", getAllUsers);

// Получить пользователя по ID
router.get("/:id", getUserById);

// Обновить пользователя
router.patch(
  "/:id",
  [
    body("username")
      .optional()
      .notEmpty()
      .withMessage("Username cannot be empty"),
    body("email").optional().isEmail().withMessage("Valid email is required"),
  ],
  validate,
  updateUser
);

// Удалить пользователя
router.delete("/:id", deleteUser);

module.exports = router;
