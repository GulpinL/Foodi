//like order but not ref order
// ref food + quantity
const { default: mongoose } = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const orderUser = new Schema(
  {
    quantity: Number,
    food_id: [{ type: Schema.Types.ObjectId, ref: 'food' }]
  }
);

module.exports = mongoose.model("comment", orderUser);
