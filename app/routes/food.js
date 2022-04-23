var express = require("express");

const foodController = require("../controllers/foodController");
var router = express.Router();

/* GET users listing. */
router.get("/:slug", foodController.renderFoodDetail);

router.post("/:slug/addComment",foodController.addCommentFood);

module.exports = router;
