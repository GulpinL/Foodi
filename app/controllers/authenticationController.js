const { mongooseToObject } = require("../services/util/mongoose");
const  authenticationService  = require("../services/authenticationService");
// const passport = require('../services/passport');

class authenticationController {
  
  //RENDER things
  renderAuthPage(req, res, next) {
    // const UserName =" Long at UserController";    //res.local.User.name
    // res.render("userLogined/userProfile",{UserName});//logined
    res.redirect("authentication/login");
  }
  
  userProfileEditingPage(req, res, next) {
    const UserName =" Long at UserController";
    res.render("authentication/userProfile",{UserName});
  }
  
  signIn(req, res) {
    res.render("authentication/register");
  }
  
  login(req, res) {
    if (req.user) {
      console.log("USER EXIST GULPINL");
      res.redirect('/');
    } else {
      res.render('authentication/login', {
        title: 'Login',
      });
    }
  }

  // logined(req, res) {
  //   passport.authenticate('local', {
  //     successRedirect: '/',// thanh cong thi nhay vao main
  //     failureRedirect: '/authentication/login',
  //   })
  // }
  // [POST] register a new user
  async register(req, res) {    // Create a new user

      const { password, email,name } = req.body;
      const user=await authenticationService.isUserExist(email);
      if (user) {
        res.render('authentication/register', {
          title: 'Register',
          error: 'User already exist',
        });
        return;
      }
  
      await authenticationService.register(email, password, name);
      res.redirect("/");
    
  }

  logout(req, res) {
    req.logout();
    res.redirect('/');
  };

  checkEmailExist= async (req, res) => {
    const email=req.params.email;
    const user = await authenticationService.isUserExist(email);
    res.json(!!user);//true or false
  }


}

module.exports = new authenticationController();
