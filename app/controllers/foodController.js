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

    
    console.log('slu o COMMENT LA :',slug);
    console.log('FOOD ID la: ', foodId);
    console.log('CONTENT cua COMMENT la :',comments);


    res.render("food/foodDetail", {food, comments});
  }

  addCommentFood =async(req, res, next) =>{
    const slug =req.params.slug;
    const commentContent=req.body.comment;

    const food =await foodService.getFoodDetailBySlut(slug);
    const foodId=food._id;
    const addComment=await commentService.addComment(foodId,commentContent);

    res.redirect("/");///:slug
    //res.redirect("/:{{slug}}");
    // res.render("food/foodDetail", {food});
  }
}

module.exports = new FoodController();
