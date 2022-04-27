var express = require("express");
var router = express.Router();
const authenticationController = require("../controllers/authenticationController");
const passport = require('../services/passport');


/* GET users listing. */
router.get("/", authenticationController.renderAuthPage);// render link vao login va link vao register

router.get("/register", authenticationController.signIn);

router.post("/register", authenticationController.register);

router.get("/login", authenticationController.login);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',// thanh cong thi nhay vao main
    failureRedirect: '/authentication/login',
  }));
// router.post('/login',authenticationController.logined);
router.get('/logout', authenticationController.logout);
router.get('/api/check-email-exist/:email', authenticationController.checkEmailExist);
module.exports = router;
