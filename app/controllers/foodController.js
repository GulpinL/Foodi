const Food = require("../models/foodModel");
const { mongooseToObject } = require("../../util/mongoose");

class FoodController {
  // [GET] /food/:slug
  show(req, res, next) {
    Food.findOne({ slug: req.params.slug })
      .then((food) => {
        console.log(food);
        res.render("food/foodDetail", { food: mongooseToObject(food) });
      })
      .catch((err) => next(err));
    // res.send("respond with a resource " + req.params.slug);
  }
}

module.exports = new FoodController();
