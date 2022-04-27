const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
//PASSPORT

exports.register = async (userEmail, userPassword,userName)=> {
    const user = new User({
        name:userName,
        password:userPassword,
        email:userEmail,
    });
    //user.save();
    const token = await user.generateAuthToken();
    console.log(token);
    return 1;
  };
  
  exports.isUserExist =  async (email)=> {
    const user = await User.findOne({ email:email });
    return user;
  };
  
  exports.verifyUser = async function (email, password) {
    // const user = await users.findOne({email:verifyUserEmail});//lean();
    const user = await User.findOne({ email });
    // const user = await User.findByCredentials(email, password);
    if (!user) {
      return false;
    }
    if (bcrypt.compareSync(password, user.password))
      return user;
    return false;

  };

  exports.changeUserPassword = async function (email,newPassword) {
      newPassword = await bcrypt.hash(newPassword, 8);
      let user= await User.updateOne({email:email},{password:newPassword});
      console.log("user o change Password ",user);
      return 1;

  };

