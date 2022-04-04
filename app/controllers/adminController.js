const Food = require("../models/foodModel");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class adminController {
  // get home page
  renderAdminHomePage(req, res, next) {
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

  update(req, res, next) {
    Food.findOne({ slug: req.params.slug })
      .then((food) => {
        food = mongooseToObject(food);
        console.log(food);
        res.render("admin/update", {
          food,
        });
      })
      .catch((err) => next(err));
  }

  updated(req, res, next) {
    Food.findByIdAndUpdate(req.params._id, req.body)
      .then(() => res.redirect("/admin/danh-sach-san-pham"))
      .catch((err) => next(err));
  }

  delete(req, res, next) {
    Food.findOneAndDelete({ slug: req.params.slug })
      .then(() => res.redirect("/admin/danh-sach-san-pham"))
      .catch((err) => next(err));
  }
}

module.exports = new adminController();
