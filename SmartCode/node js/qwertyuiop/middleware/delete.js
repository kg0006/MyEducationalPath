const fs = require("fs").promises;
const path = require("path");
const { myWay } = require("./readFile");

function delUser(req, res, next) {
  const { id } = req.params;
  const { users } = res.locals;
  const updatedUsers = users.filter((u) => u.id !== +id);

  fs.writeFile(myWay("db", "users.json"), JSON.stringify(updatedUsers)).then(
    () => {
      res.locals.users = updatedUsers;
      next();
    }
  );
}

module.exports = { delUser };
