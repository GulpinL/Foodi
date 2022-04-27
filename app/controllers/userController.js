const User = require("../models/userModel");
const { mongooseToObject } = require("../services/util/mongoose");
const  authenticationService  = require("../services/authenticationService");
const  userService  = require("../services/userService");
const bcrypt = require('bcryptjs');

class UserController {
  renderUserPage(req, res, next) {
    if (req.user) {
      let user =req.user;
      // console.log("THONG TIN CUA SUER LA : ",user);
      res.render("userLogined/userProfile",{user});
    } else {
      res.redirect("/authentication/login");
    }
  }

  userProfileEditingPage(req, res, next) {
    const UserName =" Long at UserController";
    //res.local.User.name
    res.render("user/user-profile",{UserName});
  }

  renderUpdateProfile(req, res, next) {
    res.render("userLogined/edittingUserProfile")
  }

  renderChangePassword(req, res, next) {
    res.render("userLogined/changePassword")
  }

  changePassword =async(req, res, next)=> {
    const {oldPassword,newPassword} = req.body;
    const userName =req.user.name;
    const userMail=req.user.email;

    const user = await authenticationService.verifyUser(userMail, oldPassword);//day laf cho import service de su dung  : verifyUser
    if (user) {
        let changepass= await authenticationService.changeUserPassword(userMail,newPassword);
    }
    const newerPassword = await bcrypt.hash(newPassword, 8);
    res.send("change pass word post da change pass",{oldPassword,newerPassword,userName,userMail});
  }

  updateProfile= async (req, res) =>{
    res.send("update thanh cong user")
    // const userId=req.params._id;
    // console.log("Update user name than cong",userId);
    // const user = await userService.changeUserName(userId, userName);
    
    // res.redirect("user")
  }

  
}

module.exports = new UserController();
