const express = require("express");
const bodyParser = require("body-parser");
const feedRouter = require("./routes/feed");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/feed", feedRouter);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

mongoose
  .connect(
    "mongodb+srv://tholiveira:Akmv1j1nY0WW3CRp@cluster0.69gso.gcp.mongodb.net/planets?retryWrites=true&w=majority"
  )
  .then(app.listen(8080))
  .catch((err) => console.log(err));
