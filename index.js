require("dotenv").config();
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("welcome to db");
});

app.get("/home", (req, res) => {
  res.send("<h1> hello db <h1>");
});

app.listen(process.env.PORT || 4000, (req, res) => {
  console.log(`Server running at port: ${process.env.PORT || 4000}`);
});
