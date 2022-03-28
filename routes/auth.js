const express = require("express");
const router = express.Router();

const authController = require("../app/controllers/authController");

router.get("/sign-in", authController.signIn);

router.post("/register", authController.register);

router.post("/login", authController.login);

module.exports = router;
