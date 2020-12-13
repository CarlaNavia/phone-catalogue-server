// const cloudinary = require('cloudinary');
// const cloudinaryStorage = require('multer-storage-cloudinary');
// const multer = require('multer');

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET
// });

// var storage = cloudinaryStorage({
//   cloudinary,
//   folder: 'phone-catalogue', 
//   allowedFormats: ['jpg', 'png'],
//   filename: function (req, res, cb) {
//     let fileName = res.originalname.split(".");
//     cb(null, fileName[0]); 
//   }
// });

// const uploader = multer({ storage });
// module.exports = uploader;

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});
 
const storage = new CloudinaryStorage({
  cloudinary,
  folder: 'phone-catalogue', 
  allowedFormats: ['jpg', 'png'],
  filename: function (req, res, cb) {
    let fileName = res.originalname.split(".");
    cb(null, fileName[0]); 
  }
});
 
const parser = multer({ storage: storage });
module.exports = parser