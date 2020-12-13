require("dotenv").config();

const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//ROUTES
const indexRouter = require("./routes/index");
const phonesRouter = require("./routes/phones");
const imgFileUploadRouter = require("./routes/imageFileUpload");

// MONGOOSE CONNECTION
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    keepAlive: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`Connected to database`))
  .catch((err) => console.error(err));

const app = express();

//CORS MIDDLEWARE
app.use(
  cors({
    credentials: true,
    origin: [process.env.PUBLIC_DOMAIN],
  })
);

//MIDDLEWARE
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//ROUTER MIDDLEWARE
app.use("/", indexRouter);
app.use("/phones", phonesRouter);
app.use("/", imgFileUploadRouter);

//FRONTEND ROUTE
app.use((req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//ERROR HANDLING
app.use((req, res, next) => {
  res.status(404).json({ code: "not found" });
});

app.use((err, req, res, next) => {
  console.error("ERROR", req.method, req.path, err);

  if (!res.headersSent) {
    const statusError = err.status || "500";
    res.status(statusError).json(err);
  }
});

module.exports = app;
