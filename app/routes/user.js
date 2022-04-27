var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get("/", userController.renderUserPage);
router.get("/changePassword",userController.renderChangePassword);
router.post("/changePassword",userController.changePassword);
router.get("/updateProfile",userController.renderUpdateProfile);
router.post("/updatedProfile/:_id",userController.updateProfile);
// router.post("/updatedProfile/:_id",res.send("update thanh cong"));

module.exports = router;
