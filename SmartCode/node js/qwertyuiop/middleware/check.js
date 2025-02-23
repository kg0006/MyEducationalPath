const fs = require("fs").promises;
const path = require("path");

function ifCheck(param = "log") {
  if (param === "reg") {
    if (check) {
      res.status(422).send("User with same email already exist");
    } else {
      next();
    }
  } else {
    if (check) {
      res.locals.user = check;
      next();
    } else {
      res.status(422).send("User not found - Email don't exit");
    }
  }
}

function checkEmail(req, res, next) {
  const { users } = res.locals;
  const { body } = req;

  if (body.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    const check = users.find((u) => u.email === body.email);
    ifCheck("reg");
  } else {
    res.status(422).send("invalid input - EMAIL");
  }
}

function checkBody(req, res, next) {
  const { name, age, gender } = req.body;

  if (
    name.trim() &&
    name[0].toLowerCase() !== name[0] &&
    age <= 65 &&
    age >= 18 &&
    gender.trim()
  ) {
    next();
  } else {
    res.status(422).send("invalid input - BODY");
  }
}

function checkLogin(req, res, next) {
  const { users } = res.locals;
  const { body } = req;

  if (body.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    const check = users.find((u) => u.email === body.email);
    ifCheck();
  } else {
    res.status(422).send("invalid input - EMAIL");
  }
}

module.exports = { checkEmail, checkBody, checkLogin };
