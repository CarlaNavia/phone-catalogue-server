const express = require("express");
const router = express.Router();

const Phone = require("../models/Phone");

// GET phones listing
router.get("/", function (req, res, next) {
  Phone.find()
    .then((allPhonesList) => {
      res.json(allPhonesList);
    })
    .catch((err) => {
      res.json(err);
    });
});

// POST add a new phone
router.post("/new", (req, res, next) => {
  Phone.create({
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    description: req.body.description,
    color: req.body.color,
    price: req.body.price,
    imageFileName: req.body.imageFileName,
    screen: req.body.screen,
    processor: req.body.processor,
    ram: req.body.ram,
  })
    .then((newPhone) => {
      res.json(newPhone);
    })
    .catch((err) => {
      res.json(err);
    });
});

//GET a phone
router.get("/:id", (req, res, next) => {
  Phone.findById(req.params.id)
  .then((thePhone) => {
    res.json(thePhone);
  })
  .catch((err) => {
    res.json(err);
  });
})

//DELETE a phone
router.delete("/:id", (req, res, next) => {
  Phone.findByIdAndRemove(req.params.id)
    .then((onePhone) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
