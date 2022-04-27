const Food = require("../models/foodModel");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../services/util/mongoose");
const  userService  = require("../services/userService");
const  foodService  = require("../services/foodService");


class adminController {
  // RENDER PAGE
  renderAdminHomePage(req, res, next) {
    res.render("admin/_mainAdmin");
  }

  renderFoodList(req, res, next) {
    Food.find({})
      .then((foods) => {
        res.render("admin/foodList", {
          foods: mutipleMongooseToObject(foods),
        });
      })
      .catch((err) => next(err));
  }
    // renderUserList
    renderUserList= async (req, res, next) =>{
      const users=await userService.getUsers();
      // res.send("user controller renderUserList");
      res.render("admin/userAccountList",{users});
    }

  sortName =async(req, res, next)=> {
      const users  =await userService.getUsersAndSortByName();
      res.render("admin/userAccountList",{users});
      // res.redirect("/admin/danh-sach-nguoi-dung");
      // res.render("admin/userAccountList",{users});
    }
   sortCreateDay =async(req, res, next)=> {
      const users  =await userService.getUsersAndSortByName();
      res.render("admin/userAccountList",{users});
      // res.redirect("/admin/danh-sach-nguoi-dung");
    }
    // renderUserDetail
    renderUserDetail= async (req, res, next) =>{
      // const {userId}=req.params._id;
      const userName=req.params.name;
      console.log("uahUHUHUHUJHSS USER NAME", userName);
      const long ="long dep trai"
      // console.log("iuauishusiuaiaihiuIASIJAOSJOAJS",userId);
      const userSS=await userService.getUserByName(userName);
      // res.send("user controller renderUserDetail t: ",userId);
      // res.send("user controller renderUserDetail t:{{long}} ",{long});
      // console.log("uahUHUHUHU", userSS);
      // const myEmail=userSS.email;
      // const myName = userSS.name;
      // console.log("My Email", myEmail);
      // console.log("My Name",myName);

      // FIND ONE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // != FIND
      res.render("admin/userAccountDetail",{userSS});
    }
  


    sortFoodName =async(req, res, next)=> {
      const foods  =await foodService.getFoodsAndSortByName();
      res.render("admin/foodList",{foods});
      // res.redirect("/admin/danh-sach-nguoi-dung");
      // res.render("admin/userAccountList",{users});
    }
    // searchingFoodInFoodList
    searchingFoodInFoodList =async(req, res, next)=> {
      const {searchFoodName}=req.body;
      
      const foods  =await foodService.getFoodsBySearchName(searchFoodName);
  
      res.render("admin/foodList",{foods});
    }




  renderFoodAdding(req, res, next) {
    res.render("admin/foodAdding");
  }

  // post add product from /admin/store
  addFood(req, res, next) {
    const food = new Food(req.body);
    food.save();
    res.redirect("/admin/danh-sach-san-pham");
  }

  updateFood(req, res, next) {
    Food.findOne({ slug: req.params.slug })
      .then((food) => {
        food = mongooseToObject(food);
        console.log(food);
        res.render("admin/foodEditing", {
          food,
        });
      })
      .catch((err) => next(err));
  }

  updatedFood(req, res, next) {
    Food.findByIdAndUpdate(req.params._id, req.body)
      .then(() => res.redirect("/admin/danh-sach-san-pham"))
      .catch((err) => next(err));
  }

  deleteFood(req, res, next) {
    Food.findOneAndDelete({ slug: req.params.slug })
      .then(() => res.redirect("/admin/danh-sach-san-pham"))
      .catch((err) => next(err));
  }



  

}

module.exports = new adminController();
