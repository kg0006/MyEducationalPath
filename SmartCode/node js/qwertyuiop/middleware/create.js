const fs = require("fs").promises;
const path = require("path");
const { myWay } = require("./readFile");

function createUser(req, res, next) {
  const { users } = res.locals;
  const { name, age, gender, email } = req.body;
  const newUser = {
    id: users[users.length - 1].id + 1,
    name,
    age,
    gender,
    email,
    role: "user",
  };

  res.locals.newUser = newUser;
  next();
}

function addUser(req, res, next) {
  const { users } = res.locals;

  users.push(res.locals.newUser);

  fs.writeFile(myWay("db", "users.json"), JSON.stringify(users)).then(() => {
    next();
  });
}

module.exports = { createUser, addUser };
