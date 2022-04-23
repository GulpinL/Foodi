// ref food
const { default: mongoose } = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const comment = new Schema(
  {
    content: String,
    food_id: [{ type: Schema.Types.ObjectId, ref: 'food' }]
  }
);

module.exports = mongoose.model("comment", comment);
