const mongoose = require("mongoose");
const Phone = require("../models/Phone");

mongoose.connect(
  `mongodb+srv://phone-catalogue:DWMigZZemGJVHKUx@cluster0.mb08c.mongodb.net/phone-catalogue?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const phone = [
  {
    name: "iPhone 8",
    manufacturer: "Apple",
    description:
      "The iPhone 8 is the most basic model of the latest generation of Apple smartphones. Its design includes a glass on the back and is 7.3 millimeters thick. It is a light mobile for its size and weighs in at 148 grams. The Apple iPhone 8 boasts a 4.7-inch diagonal screen.",
    color: "Silver",
    price: 809,
    imageFileUrl:
      "https://res.cloudinary.com/dfzng0uyk/image/upload/v1608140853/phone-catalogue/Captura%20de%20pantalla%202020-12-16%20a%20las%2018.png",
    screen: "4,7″",
    processor: "A11 Bionic",
    ram: 64,
  },
  {
    name: "iPhone 12 Pro",
    manufacturer: "Apple",
    description:
      "The iPhone 12 Pro screen has rounded corners that finish off the device's curved design, and those corners are within a standard rectangle. Measuring the standard rectangle, the screen is 6.06 inches diagonally (the actual viewing surface is less).",
    color: "Pacific Blue",
    price: 1510,
    imageFileUrl:
      "https://res.cloudinary.com/dfzng0uyk/image/upload/v1608140803/phone-catalogue/Captura%20de%20pantalla%202020-12-16%20a%20las%2018.png",
    screen: "6.1” Super Retina XDR display",
    processor: "A14 Bionic",
    ram: 128,
  },
  {
    name: "Xiaomi Redmi 9",
    manufacturer: "Xiaomi",
    description:
      "The Xiaomi Mi 9 is Xiaomi's new flagship, with a 6.39-inch Super AMOLED Full HD + screen, Snapdragon 855 processor and 6GB and 8GB of RAM, with a variant called Transparent Edition with 12GB of RAM.",
    color: "Green",
    price: 180,
    imageFileUrl:
      "https://res.cloudinary.com/dfzng0uyk/image/upload/v1608140554/phone-catalogue/Captura%20de%20pantalla%202020-12-16%20a%20las%2018.png",
    screen:
      "6,53'' (16,58 cm), FHD+ (2340 x 1080), 400 nit, Corning Gorilla Glass 3",
    processor: "Media Tek Helio G80 Octa-Core, GPU: Mali-G52 MC2, 950 MHz",
    ram: 12,
  },
  {
    name: "Samsung Galaxy S20 FE",
    manufacturer: "Samsung",
    description:
      "Samsung's Galaxy S20 is the new generation of the South Korean company, a terminal that boasts the latest screen technology with a QHD + panel with 120 Hz refresh and 240 Hz sampling that mounts a triple camera and the Exynos 990 of eight nuclei.",
    color: "Violet",
    price: 830,
    imageFileUrl:
      "https://res.cloudinary.com/dfzng0uyk/image/upload/v1608140448/phone-catalogue/Captura%20de%20pantalla%202020-12-16%20a%20las%2018.png",
    screen:
      "6,5'' (16,51 cm), FHD+ ( 1080x2400) Super AMOLED 2X Infinity O Display",
    processor: "Android 10",
    ram: 256,
  },
  {
    name: "Huawei P Smart 2021",
    manufacturer: "Huawei",
    description:
      "The Huawei P Smart 2021 is a new mid-range terminal that brings the P Smart series to today's standards, with a quad rear camera and a screen that incorporates the front camera in a hole in the screen.",
    color: "Black",
    price: 250,
    imageFileUrl:
      "https://res.cloudinary.com/dfzng0uyk/image/upload/v1608140681/phone-catalogue/Captura%20de%20pantalla%202020-12-16%20a%20las%2018.png",
    screen: "6,67'' (16,94 cm), TFT LCD IPS (2400 x 1080px)",
    processor: "Android 10, EMUI 10.1",
    ram: 128,
  },
];

Phone.create(phone, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${phone.length} phone`);
  mongoose.connection.close();
});
