var express = require("express");
var router = express.Router();
const homePage = require("../app/controllers/homePageController");

/* GET home page. */
router.get("/", homePage.renderHomePage);
router.get("/about",homePage.renderAbout);
router.get("/booktable",homePage.renderBooktable);
router.get("/menu",homePage.renderMenu);

// router.get("/user",homePage.renderUserPage);
router.get("/shoppingCart",homePage.renderShoppingCart);

router.get("/test",homePage.renderTestPage);

module.exports = router;
