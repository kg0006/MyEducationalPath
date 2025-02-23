const express = require("express");
const path = require("path");
const { title } = require("process");

const app = express();
const port = 3500;

const users = [12, 34, 56, 78, 90];

const create = (fileName) => path.join(__dirname, "view", `${fileName}`);

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render(create("index.ejs"), { title: "Home Page" });
});

app.get("/user", (req, res) => {
  res.render(create("user.ejs"), { title: "User" });
});

app.get("/users", (req, res) => {
  res.render(create("users.ejs"), { title: "Users", users: users });
});

app.get("/nigga", (req, res) => {
  res.render(create("nigga.ejs"), { title: "Adding" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
