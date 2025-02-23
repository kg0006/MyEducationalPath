var express = require("express");
var router = express.Router();

const Controller = require("../controller/controller");

const controller = new Controller();

/* GET home page. */
router.get("/", controller.getItems);

module.exports = router;
