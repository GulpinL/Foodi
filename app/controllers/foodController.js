// const Food = require("../models/foodModel");
// const { mongooseToObject } = require("../services/util/mongoose");

const  foodService  = require("../services/foodService");
const commentService= require("../services/commentService");
class FoodController {

  renderFoodDetail =async(req, res, next) =>{
    const slug =req.params.slug;
    const food =await foodService.getFoodDetailBySlut(slug);
    const foodId=food._id;
    const comments =await commentService.getCommentByFoodId(foodId);
    const relatedFoods=await foodService.getRelatedFoods(slug);

    
    console.log('slu o COMMENT LA :',slug);
    console.log('FOOD ID la: ', foodId);
    console.log('CONTENT cua COMMENT la :',comments);


    res.render("food/foodDetail", {food, comments, relatedFoods});
  }

  addCommentFood =async(req, res, next) =>{

    if (req.user) {
      let slug =req.params.slug;
      let commentContent=req.body.comment;

      let food =await foodService.getFoodDetailBySlut(slug);
      let foodId=food._id;
      let addComment=await commentService.addComment(foodId,commentContent);

      res.redirect("/");
    } else {
      res.redirect("/authentication/login");
      // res.render('authentication/login'
    }

  }

  

}

module.exports = new FoodController();
