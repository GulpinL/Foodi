var express = require("express");
var router = express.Router();
const UserController = require("../app/controllers/userController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/sign-in", UserController.signIn);

router.post("/register", UserController.register);

router.get("/login", UserController.login);

router.post("/loged-in", UserController.logedin);
module.exports = router;
