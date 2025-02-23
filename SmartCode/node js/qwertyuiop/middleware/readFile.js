const fs = require("fs").promises;
const path = require("path");

function myWay(...args) {
  return args.join(",").replaceAll(",", "/");
}

function readHome(req, res, next) {
  fs.readFile(myWay("pages", "index.html"), "utf-8").then((data) => {
    res.locals.home = data;
    next();
  });
}

function readError(req, res, next) {
  fs.readFile(myWay("pages", "error.html"), "utf-8").then((data) => {
    res.locals.err = data;
    next();
  });
}

function readUsers(req, res, next) {
  fs.readFile(myWay("db", "users.json"), "utf-8").then((data) => {
    res.locals.users = JSON.parse(data);
    next();
  });
}

function readById(req, res, next) {
  const { users } = res.locals;
  const user = users.find((u) => u.id === +req.params.id);

  if (user) {
    res.locals.userById = user;
    next();
  } else {
    res.status(404).send("user not found");
  }
}

function readQuery(req, res, next) {
  const { name } = req.query;

  if (name) {
    const { users } = res.locals;
    res.locals.users = users.filter(
      (u) => u.name.toLowerCase() === name.toLowerCase()
    );
    next();
  } else {
    next();
  }
}

module.exports = { myWay, readHome, readError, readUsers, readById, readQuery };
