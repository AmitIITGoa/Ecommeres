const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  productId: String,
  quantity: {
    type: Number,
    default: 1
  },
  name: String,
  img: String,
  color: String,
  size: String,
  price: String,
  userid : String
});

module.exports = mongoose.model('Cart', CartSchema);
