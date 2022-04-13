const Food = require("../models/foodModel");
//const {db}=require("../../config/db")


// exports.listFood = async () =>{
//     return await Food.find({}).lean();
// };

exports.listFood = async () =>{
    const foods =await Food.find({}).lean();
    return foods;
};



// exports.listFood = async (offset=0, limit =9) =>{
//     return await Food.findAndCountAll({raw :true ,offset, limit});
// };

