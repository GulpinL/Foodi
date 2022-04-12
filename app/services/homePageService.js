const { Foods }  = require("../models/foodModel");
//const {db}=require("../../config/db")



exports.listFoods = async () =>{
        foodList= await Foods.find({});// choc vao data thi phai async await
        const foods = foodList.map(food=>food.toObject());
        
        return  new promise.resolve(foods)
    }
//*02
// exports.listFoods = async () =>{
//       foodlist= await Food.find();
//       const foods = foodList.map(food=>food.toObject());
      
//       return  {foods}
//   }

// exports.listFoods = async () => {
//     return await db().collection('foods').find().toArray();
//   };

  
// exports.listFoods = async () => {
//   return await Food.find();












// exports.listFood = async (offset=0, limit =9) =>{
//     return await Food.findAndCountAll({raw :true ,offset, limit});
// };

// exports.listFood = async () =>{
//     // await Food.find();
//     // const foods = foods.map((food) => food.toObject());
//     // return foods;

//     // Food.find({})
//     //   .then((foods) => {
//     //     foods = foods.map((food) => food.toObject());
//     //     return foods;
//     //   })
//     const Foodlist= await Food.find({});
//     const returnFoodList= await returnFoodList

// }; 