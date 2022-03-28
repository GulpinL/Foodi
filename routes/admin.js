var express = require("express");
var router = express.Router();
const adminController = require("../app/controllers/adminController");
const foodController = require("../app/controllers/foodController");

/* GET home page. */
router.get("/", adminController.menu);
router.get("/danh-sach-san-pham", adminController.listProduct);
router.get("/them-san-pham", adminController.addProduct);
router.post("/store", adminController.store);

module.exports = router;
