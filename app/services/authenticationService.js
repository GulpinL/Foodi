const User = require("../models/userModel");

exports.getNumberOfFoods = async (page) =>{
    const foods =await Food.find({}).lean();
    const countFoods=foods.length;
    return countFoods;
};

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
  
//   exports.isUserExist = function (email) {// ? use where
    

//     return users.findOne({
//       where: {
//         email: email,
//       },
//       raw: true,
//     });
//   };
  
//   exports.verifyUser = async function (email, password) {// ?
//     const user = await users.findOne({
//       where: {
//         email: email,
//       },
//       raw: true,
//     });
//     if (!user) {
//       return false;
//     }
//     if (bcrypt.compareSync(password, user.password))
//       return user;
//     return false;
//   };

