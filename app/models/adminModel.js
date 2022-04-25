const { default: mongoose } = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    name: String,
    price: Number,
    password: String,
    avatar: String,
    description: String,
  }
);

module.exports = mongoose.model("adminAccount", adminSchema);
