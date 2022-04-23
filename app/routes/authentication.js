var express = require("express");
var router = express.Router();
const authenticationController = require("../controllers/authenticationController");

/* GET users listing. */
router.get("/", authenticationController.renderUserPage);//router.post("/", UserController.logedin);

router.get("/register", authenticationController.signIn);// router.get("/sign-in", authenticationController.signIn);

router.post("/register", authenticationController.register);// router.post("/register", authenticationController.register);

router.get("/login", authenticationController.login);// router.post("/login", authenticationController.login);

router.post("/loged-in", authenticationController.logedin);// tus code, save later !

module.exports = router;
