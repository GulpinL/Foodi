const User = require("../models/userModel");
const { mongooseToObject } = require("../services/util/mongoose");
const nodemailer = require("nodemailer");

// util
function randString() {
  const len = 8;
  let randStr = "";
  for (let i = 0; i < len; i++) {
    const ch = Math.floor(Math.random() * 10 + 1);
    randStr += ch;
  }
  return randStr;
}

const sendEmail = (email, uniqString) => {
  var Transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "annice376@gmail.com",
      pass: "1204TuLinh",
    },
  });

  var mailOptions;
  let sender = "Tu Pham";
  mailOptions = {
    from: sender,
    to: email,
    subject: "Confirm your email",
    html: `Press <a href = https://localhost:3000/verify/${uniqString}>here</a> to verify your email`,
  };

  Transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: ");
    }
  });
};

class UserController {
  renderUserPage(req, res, next) {
    //res.json(User);
    //const UserName =res.query.name;
    //const UserName2 =req.body.name;
    const UserName = " Long at UserController";

    //res.local.User.name
    res.render("user/user-profile", { UserName });
  }
  // [GET] sign-in page
  signIn(req, res) {
    res.render("user/register");
  }

  // [POST] register a new user
  async register(req, res) {
    // Create a new user
    try {
      const user = new User(req.body);
      await user.save();
      const token = await user.generateAuthToken();
      res.status(201).send({ user, token });
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  // [GET] login a user
  login(req, res) {
    res.render("user/login");
  }

  // [POST] login a user
  async logedin(req, res) {
    //Login a registered user
    try {
      const { email, password } = req.body;
      const user = await User.findByCredentials(email, password);
      if (!user) {
        return res
          .status(401)
          .send({ error: "Login failed! Check authentication credentials" });
      }
      const token = await user.generateAuthToken();
      console.log(`loged in user: ${user.name} with token: ${token}`);

      const UserName = user.name;
      //res.render('index',{UserName:user.name})
      // res.redirect('/${UserName}');
      res.redirect("/");
    } catch (error) {
      res.send("error, check server log");
    }
  }

  // cái này viết trong class userController
  // [POST] sign-up a new user with email verification
  async signUp(req, res) {
    const { email, password } = req.body;
    const uniqString = randString();
    const isValid = false;

    const newUser = new User(isValid, uniqString, email, password);
    await newUser.save();
    sendEmail(email);
  }
  async verify(req, res) {
    // getting the string
    const { uniqString } = req.params;
    const user = await User.findOne({ uniqString });
    if (user) {
      // if exist then mark them verified
      user.isValid = true;
      await user.save();
      // redirect to the home or anywhere else
      res.redirect("/");
    } else {
      res.json("User not found");
    }
  }
}

module.exports = new UserController();
