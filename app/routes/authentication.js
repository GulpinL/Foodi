var express = require("express");
var router = express.Router();
const authenticationController = require("../controllers/authenticationController");
const passport = require('../services/passport');


/* GET users listing. */
router.get("/", authenticationController.renderUserPage);//router.post("/", UserController.logedin);

router.get("/register", authenticationController.signIn);// router.get("/sign-in", authenticationController.signIn);

router.post("/register", authenticationController.register);// router.post("/register", authenticationController.register);

router.get("/login", authenticationController.login);// router.post("/login", authenticationController.login);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/shoppingCart',
    failureRedirect: '/authentication/login',
  }));
// router.post("/loged-in", authenticationController.logedin);// tus code, Delete later !
router.get('/logout', authenticationController.logout);
router.get('/api/check-email-exist/:email', authenticationController.checkEmailExist);
module.exports = router;
