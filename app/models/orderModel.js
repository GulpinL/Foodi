//save then delete all when log out
const { default: mongoose } = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const order = new Schema(
  {
    quantity: Number,
    food_id: [{ type: Schema.Types.ObjectId, ref: 'food' }]
  }
);

module.exports = mongoose.model("order", order);
ty