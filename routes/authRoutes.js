const express = require("express");
const { body } = require("express-validator");
const { register, login } = require("../controllers/authController");
const validate = require("../middlewares/validate");
const router = express.Router();

router.post(
  "/register",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").isLength({ min: 6 }).withMessage("Min 6 characters"),
  ],
  validate,
  register
);

router.post("/login", login);

module.exports = router;
