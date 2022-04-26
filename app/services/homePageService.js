const { $where } = require("../models/foodModel");
const Food = require("../models/foodModel");

// exports.getFoods = async () =>{
//     const foods =await Food.find({}).lean();
//     return foods;
// };

// exports.getNoOfPagesFoods = async () =>{
//     const foods =await Food.find({}).lean();
//     return foods;
// };

// exports.getFoodsAndCountFoods = async () =>{
    

//     const foods =await Food.find({}).lean();
//     const countFoods=foods.length;

//     return {foods, countFoods};
// };

// exports.getFoodsByFoodPerPage = async (page, numberFoodPerPage) =>{
//     if (!page || isNaN(page)) page = 1;
//     else{
//         page = parseInt(page);
//     }
//     const NumberFoodPerPage=numberFoodPerPage;
//     const skipFoodsNumber=(page-1)*NumberFoodPerPage;//2 item per page
//     const foods =await Food.find({}).lean().limit(NumberFoodPerPage).skip(skipFoodsNumber);

//     // console.log("FOOD CHO SERVICE",foods);
//     //const foods=food.lean();
//     // const foods =await Food.find({}).limit(NumberFoodPerPage).skip(skipFoodsNumber).lean();

//     return foods;
// };

// exports.getNumberOfFoods = async (page) =>{
//     const foods =await Food.find({}).lean();
//     const countFoods=foods.length;
//     return countFoods;
// };






