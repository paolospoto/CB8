const express = require("express");

const app = express();
const port = 3000;
const data = require("./data/data.json");

app.set("view engine", "hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/data", (req, res) => {
  res.render("data", { items: data });
});

app.get("/endpoint", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
