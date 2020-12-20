const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone");
const uploader = require("../configs/cloudinary-setup");

router.post(
  "/uploadphone/:phoneId",
  uploader.single("file"),
  async (req, res, next) => {
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    const phoneImage = await Phone.findByIdAndUpdate(
      req.params.phoneId,
      { imageFileUrl: req.file.secure_url },
      { new: true }
    );

    res.json(phoneImage);
  }
);

module.exports = router;
