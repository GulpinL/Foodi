var express = require("express");
var router = express.Router();
const UserController = require("../controllers/userController");

/* GET users listing. */
router.get("/", UserController.renderUserPage);

router.get("/register", UserController.signIn);

router.post("/register", UserController.register);

router.get("/login", UserController.login);

router.post("/loged-in", UserController.logedin);
// tus code, save later !

// cái này thêm trong user route
router.post("/sign-up", UserController.signUp);
router.get("/verify/:uniqString", UserController.verify);
//router.post("/", UserController.logedin);
module.exports = router;
