var express = require("express");
var router = express.Router();
const homePageController = require("../controllers/homePageController");

// const ajaxScript=require("../services/ajaxServiceTwo");
/* GET home page. */
router.get("/", homePageController.renderHomePage);
router.get("/about",homePageController.renderAbout);
router.get("/booktable",homePageController.renderBooktable);
router.get("/menu",homePageController.renderMenu);
router.get("/menu/:category",homePageController.filterMenu);

// router.get("/user",homePage.renderUserPage);
router.get("/shoppingCart",homePageController.renderShoppingCart);
router.get("/shoppingCart/:slug",homePageController.renderShoppingCart);
// router.get('/api/check-food/:currentPage', homePage.ajaxFoodPaging);

// router.get("/:UserName'",homePage.renderUserPage);
//router.post("/",homePage.renderUserPage);/////////////////////////////

module.exports = router;
