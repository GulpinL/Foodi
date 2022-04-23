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
    res.render("authentication/login");
  }
  // [POST] register a new user
  async register(req, res) {    // Create a new user
    try {
      const { password, email,name } = req.body;
      authenticationService.register(email, password, name);
      res.redirect("/");

    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
    
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

      res.redirect("/");
    } catch (error) {// neu khong tim thay User thi chinh o day
      res.redirect("/menu");// redirect vo login page
    }
  }
//   loginShow (req, res) {
//       if (req.user) {
//         res.redirect('/');
//       } else {
//         res.render('authentication/login', {
//           title: 'Login',
//         });
//       }
// };


    // logout(req, res) {
    //   req.logout();
    //   res.redirect('/');
    // };

}

module.exports = new authenticationController();
