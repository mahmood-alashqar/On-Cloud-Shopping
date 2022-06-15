const mongoose = require('mongoose');

const productsShema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  img: String,
  description: String,
  modified: Array
})
const ProductsModel = new mongoose.model('products', productsShema);
module.exports = ProductsModel;