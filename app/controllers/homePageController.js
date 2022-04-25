const Food = require("../models/foodModel");
const User =require("../models/userModel");

class homePageController {
  // get home page
  
  renderHomePage(req, res, next) {
    //const users =[];
    //const BodyUser =new User();
    //const UserName ="halong 9c1 at homepageController";




    // const { email, password } = req.body;
    // const UserName = email;



    //const UserName = req.body;

    // const user = await User.findByCredentials(name);
    // if (!user) {
    //     user.name="Empty Name Long at homePageController";
    //   }
    //UserName=req.body.name;
    //console.log(req.body);
    //const userName=req.body.name;

    Food.find({})
      .then((foods) => {
        foods = foods.map((food) => food.toObject());
        res.render("index", { foods} );
      })
      .catch((err) => next(err));
  }
  renderUserPage(req, res){

    const MYUserName= req.params.UserName;
    Food.find({})
      .then((foods) => {
        foods = foods.map((food) => food.toObject());
        res.render("index", { foods, MYUserName} );
      })
      .catch((err) => next(err));
  }


  renderAbout(req, res, next) {
    res.render("homePageCustomer/about");
  }

  renderBooktable(req, res, next) {
    res.render("homePageCustomer/booktable");
  }

  renderMenu(req, res, next) {
    res.render("homePageCustomer/menu");
  }


  // renderUserPage(req, res){
  //   res.render("user/user-profile");
  // }

  renderTestPage(req, res, next){
    res.render("testViews");
  }
  renderShoppingCart(req, res, next) {
    res.render("homePageCustomer/shoppingCart");
  }

}

module.exports = new homePageController();
