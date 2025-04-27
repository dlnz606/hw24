const express = require("express");
const { body } = require("express-validator");
const {
  getAllOffers,
  createOffer,
  updateOffer,
  deleteOffer,
} = require("../controllers/offerController");
const validate = require("../middlewares/validate");
const router = express.Router();

router.get("/", getAllOffers);
router.post(
  "/",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
  ],
  validate,
  createOffer
);
router.patch("/:id", updateOffer);
router.delete("/:id", deleteOffer);

module.exports = router;
