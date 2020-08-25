const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const feedRouter = require("./routes/feed");
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/feed", feedRouter);
mongoose.connect('');
app.listen(8080);
