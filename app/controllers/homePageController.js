// const Food = require("../models/foodModel");
const User =require("../models/userModel");
const ITEMS_PER_PAGE =9;

const  homePageService  = require("../services/homePageService");
// const  {listFoods}  = require("../services/homePageService");

class homePageController {
  
  renderHomePage =async(req, res, next) =>{  
    // lay page tu req
    let { page } = req.query;
    if (!page || isNaN(page)) page = 1;
    else{
        page = parseInt(page);
    }
    //lay foods va so luong food
    const count =await homePageService.getNumberOfFoods();
    const foods  =await homePageService.ListTeacher(page);
    const user = await User.find({}).lean();
    const totalPages = Math.ceil(count / 2);//ITEMS_PER_PAGE=2
    const nextPage = page + 1;
    const previousPage = page - 1;
    const pages= Array.from(Array(totalPages).keys()).map(i => i + 1);
    
    res.render("index",{foods,page,pages,user})
    // res.render("index", { foods,countFoods,totalPages,pages: Array.from(Array(totalPages).keys()).map(i => i + 1),nextPage, previousPage,} );
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
    res.render("homePage/about");
  }

  renderBooktable(req, res, next) {
    res.render("homePage/booktable");
  }

  renderMenu(req, res, next) {
    res.render("homePage/menu");
  }
  
  renderShoppingCart(req, res, next) {
    res.render("homePage/shoppingCart");
  }

}

module.exports = new homePageController();
