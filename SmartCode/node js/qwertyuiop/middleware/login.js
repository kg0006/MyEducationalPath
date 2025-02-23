const fs = require("fs").promises;
const path = require("path");
const { myWay } = require("./readFile");

function setUser(req, res, next) {
  const { user } = res.locals;

  fs.writeFile(myWay("db", "user.json"), JSON.stringify(user)).then(() => {
    next();
  });
}

module.exports = { setUser };
