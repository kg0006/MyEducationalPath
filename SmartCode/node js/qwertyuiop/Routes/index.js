const express = require("express");
const router = express.Router();
const GetController = require("../controller/GetController");

const getController = new GetController();

router.get("/", getController.readHome);

router.get("/users", getController.readUsers);

// router.get("/:id", [readUsers, readById], (req, res) => {
//   res.json(res.locals.userById);
// });

// router.delete("/users/:id", [readUsers, readById, delUser], (req, res) => {
//   res.json(res.locals.users);
// });

// router.post(
//   "/users",
//   [readUsers, checkEmail, checkBody, createUser, addUser],
//   (req, res) => {
//     res.json(res.locals.users);
//   }
// );

// router.post("login", [readUsers, checkLogin, setUser], (req, res) => {
//   res.json(res.locals.user);
// });

module.exports = router;
