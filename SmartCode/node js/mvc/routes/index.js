let express = require("express");
const readUsers = require("../middleware/readUsers");
let router = express.Router();
const fs = require("fs").promises;
const path = require("path");
const UsersControllers = require("../controllers/UsersControllers");

const controller = new UsersControllers();
/* GET home page. */

router.get("/", controller.getAllUsers);

router.get("/register", readUsers, function (req, res) {
  res.render("register", { users: res.locals.users });
});

router.post("/register", readUsers, function (req, res) {
  const body = req.body;
  const users = res.locals.users;

  let user = {
    id: Date.now(),
    ...body,
  };

  users.push(user);
  fs.writeFile(
    path.join(__dirname, "..", "db", "users.json"),
    JSON.stringify(users)
  ).then(() => {
    res.redirect("/");
  });
});

router.delete("/:id", readUsers, (req, res) => {
  const { users } = res.locals;
  const { id } = req.params;
  const newUsers = users.filter((u) => u.id != id);
  fs.unlink(path.join(__dirname, "..", "db", "users.json")).then(() => {
    fs.appendFile(
      path.join(__dirname, "..", "db", "users.json"),
      JSON.stringify(newUsers)
    ).then(() => {
      res.send("ok");
    });
  });
});

router.get("/edite/:id", readUsers, (req, res) => {
  const { id } = req.params;
  const { users } = res.locals;
  const user = users.find((u) => u.id == id);

  res.render("edite", { user });
});

router.patch("/edite/:id", readUsers, (req, res) => {
  const { id } = req.params;
  const { value } = req.body;
  const { users } = res.locals;
  console.log(1111111);

  const newUsers = users.map((u) => {
    if (u.id == id) {
      return {
        ...u,
        name: value,
      };
    } else {
      return u;
    }
  });
  fs.unlink(path.join(__dirname, "..", "db", "users.json")).then(() => {
    fs.appendFile(
      path.join(__dirname, "..", "db", "users.json"),
      JSON.stringify(newUsers)
    ).then(() => {
      res.redirect("/");
    });
  });
});

module.exports = router;
