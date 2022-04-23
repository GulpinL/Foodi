const Food = require("../models/foodModel");
const { mongooseToObject } = require("../services/util/mongoose");

exports.getFoods = async () =>{
    const foods =await Food.find({}).lean();
    return foods;
};

exports.getFoodDetailBySlut = async (inputSlug) =>{
    
    const food =await Food.findOne({slug: inputSlug}).lean();
    return food;
};

// exports.getFoodNameBySlut = async (inputSlug) =>{
    
//     const food =await Food.findOne({slug: inputSlug}).lean();
//     return food;
// };

// Food.findOne({ slug: req.params.slug })
// .then((food) => {
//   console.log(food);
//   res.render("food/foodDetail", { food: mongooseToObject(food) });
// })
// .catch((err) => next(err));