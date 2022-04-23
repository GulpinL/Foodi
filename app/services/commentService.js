const Comment = require("../models/commentModel");


exports.getAllComments = async () =>{
    const comments =await Comment.find({}).lean();
    return comments;
};

exports.getCommentByFoodId = async (foodId) =>{
    const comments =await Comment.find({food_id:foodId}).lean();
    //const countFoods=foods.length;

    return comments;
};

exports.addComment=async(foodId,inputDescription)=> {
    const comment2 = new Comment({
        content:inputDescription,
        food_id:foodId
    });
    console.log("COMMENT DA DUOC SAVE",comment2);
    comment2.save();
 };











