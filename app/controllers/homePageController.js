const Food = require("../models/foodModel");

class homePageController {
  // get home page
  index(req, res, next) {
    Food.find({})
      .then((foods) => {
        foods = foods.map((food) => food.toObject());
        res.render("index", { foods });
      })
      .catch((err) => next(err));
  }
}

module.exports = new homePageController();
