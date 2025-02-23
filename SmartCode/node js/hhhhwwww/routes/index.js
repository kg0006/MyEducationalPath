var express = require("express");
var router = express.Router();
const Controller = require("../controller/Controller");

const controller = new Controller();

/* GET home page. */
router.get("/", controller.getCars);

router.delete("/:id", controller.delCar);

module.exports = router;
