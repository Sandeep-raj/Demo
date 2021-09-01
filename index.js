const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/world", (req, res) => {
  res.send("hello world");
});

app.get("/tik", (req, res) => {
  res.send("tok");
});

app.listen(3000);
