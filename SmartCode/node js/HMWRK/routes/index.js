const express = require("express");
const Controller = require("../controller/Controller");
const { upload, checkEmail, checkPass } = require("../middleware/middleware");

const router = express.Router();

const controller = new Controller();

/* GET home page. */
router.get("/", controller.homePage);
router.get("/users", controller.getUsers);
router.get("/register", controller.getRegister);
router.post("/register", upload.single("avatar"), controller.addUser);
router.delete("/:id", controller.delUser);
router.get("/login", controller.getLogin);
router.post("/login", checkEmail, checkPass, controller.login);

module.exports = router;
