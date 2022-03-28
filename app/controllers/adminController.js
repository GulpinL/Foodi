const Food = require("../models/foodModel");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class adminController {
  // get home page
  menu(req, res, next) {
    res.render("admin/menu");
  }

  // get list product
  listProduct(req, res, next) {
    Food.find({})
      .then((foods) => {
        res.render("admin/listProduct", {
          foods: mutipleMongooseToObject(foods),
        });
      })
      .catch((err) => next(err));
  }

  // get add product page
  addProduct(req, res, next) {
    res.render("admin/addProduct");
  }

  // post add product from /admin/store
  store(req, res, next) {
    const food = new Food(req.body);
    food.save();
    res.redirect("/admin/danh-sach-san-pham");
  }
}

module.exports = new adminController();
