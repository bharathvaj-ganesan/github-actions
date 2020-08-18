const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi, lets rock and roll");
});

app.listen(3000, () => console.log("server is running"));
