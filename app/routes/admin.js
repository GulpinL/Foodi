var express = require("express");
var router = express.Router();
const adminController = require("../controllers/adminController");
const foodController = require("../controllers/foodController");

/* GET home page. */
router.get("/", adminController.renderAdminHomePage);
router.get("/danh-sach-san-pham", adminController.listProduct);
router.get("/them-san-pham", adminController.addProduct);
router.post("/store", adminController.store);
//update product
router.get("/update/:slug", adminController.update);

router.post("/updated/:_id", adminController.updated);

//delete product
router.post("/delete/:slug", adminController.delete);

module.exports = router;
