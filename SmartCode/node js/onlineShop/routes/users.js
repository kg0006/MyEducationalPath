var express = require("express");
var router = express.Router();

const Controller = require("../controller/controller");

const controller = new Controller();

/* GET users listing. */
router.get("/register");

module.exports = router;
