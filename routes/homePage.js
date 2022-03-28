var express = require("express");
var router = express.Router();
const homePage = require("../app/controllers/homePageController");

/* GET home page. */
router.get("/", homePage.index);

module.exports = router;
