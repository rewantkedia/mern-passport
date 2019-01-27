const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload"); //addition we make

const app = express();

mongoose.connect("mongodb://localhost/mern_passport");

app.set("view engine", "ejs");
//to set up ejs templates

app.use(bodyParser.json()); // to parse the incoming http requests
app.use(express.urlencoded({ extended: true })); // for sending html form data

app.use(cors());
app.use(fileUpload());

const signup_router = require("./routes/signup");

app.use("/signup", signup_router);

const port = 8000;
app.listen(port, () => {
  console.log("Live at port ", port);
});
