var express = require("express");

const foodPage = require("../app/controllers/foodController");
var router = express.Router();

/* GET users listing. */
router.get("/:slug", foodPage.show);

module.exports = router;
