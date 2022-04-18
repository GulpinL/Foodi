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
    // const totalPages = Math.ceil(countFoods / ITEMS_PER_PAGE);
    const totalPages = Math.ceil(count / 2);
    const nextPage = page + 1;
    const previousPage = page - 1;
    const pages= Array.from(Array(totalPages).keys()).map(i => i + 1)
    // const {foods, countFoods} =await homePageService.getFoodsAndCountFoods();
    const user = await User.find({}).lean();

    // console.log(countFoods);
    console.log(foods);
    // console.log(totalPages);
    console.log(nextPage);
    console.log(previousPage);
    // res.render("index", { foods,countFoods,totalPages,pages: Array.from(Array(totalPages).keys()).map(i => i + 1),nextPage, previousPage,} );
    res.render("index",{foods,page,pages,user})
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
