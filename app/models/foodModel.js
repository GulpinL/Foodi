const { default: mongoose } = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const food = new Schema(
  {
    name: String,
    price: Number,
    img: String,
    description: String,
    category:String,
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("food", food);

// const foods= mongoose.model("food", food);
// module.exports ={foods}



