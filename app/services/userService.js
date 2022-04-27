const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
//PASSPORT

exports.changeUserName = async (userID,userName)=> {
    
    // const user = await User.findOne({ email:userEmail });
    // let updateUserName= await User.findByIdAndUpdate(req.params._id, req.body)
    let updateUserName= await User.updateOne({_id:userID},{name:userName});
    // console.log(token);
    return 1;
  };

exports.getUsers = async () =>{
    const users =await User.find({}).lean();
    return users;
};

exports.getUsersAndSortByName=async () =>{
    
  const users = await User.find().sort({name:1}).lean();
  return users;

}
exports.getUserByID=async (id) =>{
    
  const user = await User.findOne({_id:id}).lean();
  console.log("uahUHUHUHU", user);
  return user;

}
exports.getUserByName=async (userName) =>{
    
  // const user = await User.find({name:userName}).lean();
  // console.log("uahUHUHUHU", user);
  // return user;

  const user = await User.findOne({name:userName}).lean();
  return user;

}
// getUsersAndSortByName