const Food = require("../models/foodModel");

class homePageController {
  // get home page
  renderHomePage(req, res, next) {
    Food.find({})
      .then((foods) => {
        foods = foods.map((food) => food.toObject());
        res.render("index", { foods });
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
