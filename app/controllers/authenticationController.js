const { mongooseToObject } = require("../services/util/mongoose");
const  authenticationService  = require("../services/authenticationService");

class authenticationController {
  
  //RENDER things
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
