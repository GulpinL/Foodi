const Food = require("../models/foodModel");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../services/util/mongoose");

class adminController {
  // Render Page
  renderAdminHomePage(req, res, next) {
    res.render("admin/_mainAdmin");
  }

  // get list product
  renderFoodList(req, res, next) {
    Food.find({})
      .then((foods) => {
        res.render("admin/foodList", {
          foods: mutipleMongooseToObject(foods),
        });
      })
      .catch((err) => next(err));
  }

  // get add product page
  renderFoodAdding(req, res, next) {
    res.render("admin/foodAdding");
  }

  // post add product from /admin/store
  addFood(req, res, next) {
    const food = new Food(req.body);
    food.save();
    res.redirect("/admin/danh-sach-san-pham");
  }

  updateFood(req, res, next) {
    Food.findOne({ slug: req.params.slug })
      .then((food) => {
        food = mongooseToObject(food);
        console.log(food);
        res.render("admin/foodEditing", {
          food,
        });
      })
      .catch((err) => next(err));
  }

  updatedFood(req, res, next) {
    Food.findByIdAndUpdate(req.params._id, req.body)
      .then(() => res.redirect("/admin/danh-sach-san-pham"))
      .catch((err) => next(err));
  }

  deleteFood(req, res, next) {
    Food.findOneAndDelete({ slug: req.params.slug })
      .then(() => res.redirect("/admin/danh-sach-san-pham"))
      .catch((err) => next(err));
  }
}

module.exports = new adminController();
