const Offer = require("../models/Offer");

exports.getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find().populate("offeredBy", "username");
    res.json(offers);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.createOffer = async (req, res) => {
  try {
    const offer = new Offer({ ...req.body, offeredBy: req.user.userId });
    await offer.save();
    res.status(201).json(offer);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateOffer = async (req, res) => {
  try {
    const offer = await Offer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(offer);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deleteOffer = async (req, res) => {
  try {
    await Offer.findByIdAndDelete(req.params.id);
    res.json({ msg: "Offer deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
