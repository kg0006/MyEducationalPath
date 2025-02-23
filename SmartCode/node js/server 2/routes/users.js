const express = require("express");
const router = express.Router();
const {
  checkAuth,
  upload,
  checkEmail,
  checkPass,
} = require("../middleware/middleares");
const UsersControllers = require("../controllers/UsersControllers");
const controller = new UsersControllers();

//USERS ROUTES
router.get("/users", controller.getAllUsers);
router.post("/register", controller.authRegister);
router.get("/me", checkAuth, controller.getUser);
router.put("/user", checkAuth, upload.single("avatar"), controller.updateUser);
router.post("/login", [checkEmail, checkPass], controller.authLogin);
router.delete("/user/:id", checkAuth, controller.deleteUser);
router.get("/user/search", controller.search);

module.exports = router;
