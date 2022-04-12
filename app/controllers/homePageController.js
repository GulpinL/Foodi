//const Food = require("../models/foodModel");
const User =require("../models/userModel");
const ITEMS_PER_PAGE =9;

const { listFoods } = require("../services/homePageService");

class homePageController {
  renderHomePage =async(req, res, next) =>{

    // const foodList=await Food.find({});
    // let foods=foodList.map(food=>food.toObject());
    // res.render("index", { foods} );
    
    const foods= await listFoods;
    res.render("index", { foods} );
    

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
