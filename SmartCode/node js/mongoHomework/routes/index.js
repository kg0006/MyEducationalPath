var express = require("express");
var router = express.Router();

const Controller = require("../controller/Controller");
const { compile } = require("morgan");

const controller = new Controller();

/* GET home page. */
router.get("/", controller.readCars);

router.post("/add", controller.addCar);

router.delete("/delete", controller.deleteCar);

router.put("/:id", controller.put);

module.exports = router;
