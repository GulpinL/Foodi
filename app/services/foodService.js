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

exports.getFoodsAndCountFoods = async () =>{
    

    const foods =await Food.find({}).lean();
    const countFoods=foods.length;

    return {foods, countFoods};
};

exports.getFoodsByFoodPerPage = async (page, numberFoodPerPage) =>{
    if (!page || isNaN(page)) page = 1;
    else{
        page = parseInt(page);
    }
    const NumberFoodPerPage=numberFoodPerPage;
    const skipFoodsNumber=(page-1)*NumberFoodPerPage;//2 item per page
    const foods =await Food.find({}).lean().limit(NumberFoodPerPage).skip(skipFoodsNumber);

    // console.log("FOOD CHO SERVICE",foods);
    //const foods=food.lean();
    // const foods =await Food.find({}).limit(NumberFoodPerPage).skip(skipFoodsNumber).lean();

    return foods;
};

exports.getNumberOfFoods = async (page) =>{
    const foods =await Food.find({}).lean();
    const countFoods=foods.length;
    return countFoods;
};

exports.getFoodsByCategory=async (category) =>{
    if(category=='All'){
        const foods = await Food.find({}).lean();
        return foods;
    }
    const foods = await Food.find({category: category}).lean();
    return foods;

}

exports.getFoodsByPriceRange=async (priceRange) =>{
    // const priceRange = parseInt(currentPriceRange);
    // console.log("service PRICEEEE", priceRange);
    let foods ={};
    if(priceRange==50){
        foods = await Food.find({price:{$gt:0,$lt:50}}).lean();
        return foods;
    }
    foods = await Food.find({price:{$gt:51,$lt:100000}}).lean();
    return foods;

}

exports.getFoodsBySearchName=async (searchName) =>{
    
    const foods = await Food.find({name:searchName}).lean();
    return foods;

}
// getFoodsAndSortByPrice
exports.getFoodsAndSortByPrice=async () =>{
    
    const foods = await Food.find().sort({price:1}).lean();
    return foods;

}
//getFoodsAndSortByName
exports.getFoodsAndSortByName=async () =>{
    
    const foods = await Food.find().sort({name:1}).lean();// 1 or -1
    return foods;

}

exports.getRelatedFoods=async (inputSlug) =>{
    
    const food =await Food.findOne({slug: inputSlug}).lean();
    const foodCategory=food.category;
    const foods = await Food.find({category: foodCategory}).lean();
    return foods;

}

