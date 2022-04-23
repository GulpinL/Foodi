var express = require("express");
var router = express.Router();
const adminController = require("../controllers/adminController");
const foodController = require("../controllers/foodController");

/* GET home page. */
router.get("/", adminController.renderAdminHomePage);
router.get("/danh-sach-san-pham", adminController.renderFoodList);
router.get("/them-san-pham", adminController.renderFoodAdding);
router.post("/addFood", adminController.addFood);
//update product
router.get("/updateFood/:slug", adminController.updateFood);

router.post("/updatedFood/:_id", adminController.updatedFood);

//delete product
router.post("/deleteFood/:slug", adminController.deleteFood);

module.exports = router;
