const User = require("../models/userModel");
const { mongooseToObject } = require("../services/util/mongoose");

class authenticationController {
  renderUserPage(req, res, next) {
    const UserName =" Long at UserController";    //res.local.User.name
    res.render("userLogined/userProfile",{UserName});//logined
  }

  userProfileEditingPage(req, res, next) {
    const UserName =" Long at UserController";
    res.render("authentication/userProfile",{UserName});
  }

  signIn(req, res) {
    res.render("authentication/register");
  }

  // [POST] register a new user
  async register(req, res) {
    // Create a new user
    try {
      const user = new User(req.body);
      await user.save();
      const token = await user.generateAuthToken();
      //res.status(201).send({ user, token });// NOT USE TWO RES AT THE SAME 
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
    
  }

  // [GET] login a user
  login(req, res) {
    res.render("authentication/login");
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

    //   const UserName = user.name;
      //res.render('index',{UserName:user.name})
      // res.redirect('/${UserName}');
      res.redirect("/");
    } catch (error) {
      res.send("error, check server log");
    }
  }


}

module.exports = new authenticationController();
