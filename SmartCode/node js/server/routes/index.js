var express = require("express");
const UserControllers = require("../controllers/UserControllers");
var router = express.Router();
const multer = require("multer");
const path = require("path");

const controller = new UserControllers();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

/* GET home page. */
router.get("/", controller.getUsers);
router.post("/register", upload.single("avatar"), controller.createUser);

module.exports = router;
