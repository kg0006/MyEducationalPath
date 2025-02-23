var express = require("express");
var router = express.Router();

const Controller = require("../controller/controller");
const { Collection } = require("mongodb");

const controller = new Controller();

/* GET home page. */

router.get("/", controller.getCars);

router.get("/:page", controller.getCars);

router.post("/add", controller.addCar);

router.delete("/delete/:id", controller.delCar);

module.exports = router;
