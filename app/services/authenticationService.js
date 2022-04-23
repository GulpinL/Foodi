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
  
  exports.isUserExist =  async (email)=> {// ? use where
    const user = await User.findOne({ email:email });
    return user;
  };
  
  exports.verifyUser = async function (email, password) {// ?
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

