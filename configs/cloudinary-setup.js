const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

var storage = cloudinaryStorage({
  cloudinary,
  folder: "phone-catalogue", // The name of the folder in cloudinary
  allowedFormats: ["jpg", "png"],
  filename: function (req, res, cb) {
    let fileName = res.originalname.split(".");
    cb(null, fileName[0]);
  },
});

// const storage = cloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "phone-catalogue",
//     format: async (req, file) => "jpg",
//     public_id: (req, file) => "computed-filename-using-request",
//   },
// });

const parser = multer({ storage: storage });
module.exports = parser;
