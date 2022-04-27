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
  