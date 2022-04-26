//ref userHistory
const { default: mongoose } = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const orderAdmin = new Schema(
  {
    orderUser_id: [{ type: Schema.Types.ObjectId, ref: 'orderUser' }]
  }
);

module.exports = mongoose.model("orderAdmin", orderAdmin);
