const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const food = new Schema(
  {
    name: String,
    price: Number,
    img: String,
    description: String,
    slug: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("food", food);
