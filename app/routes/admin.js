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

router.get("/danh-sach-nguoi-dung", adminController.renderUserList);
router.get("/danh-sach-nguoi-dung/:name", adminController.renderUserDetail);
router.post("/sortingUser",adminController.sortName);
router.post("/sortingUser2",adminController.sortCreateDay);
router.post("/sortingFood",adminController.sortFoodName);
router.post("/searchingFoodInFoodList",adminController.searchingFoodInFoodList);
// searchingFoodInFoodList
// router.post("/searching",homePageController.searchMenu);
module.exports = router;
