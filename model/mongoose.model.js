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
  price: String,
  colour:String,
  brand: String,
  comment:String,
  comments:[String]
})
const ProductsModel = new mongoose.model('products', productsShema);
module.exports = ProductsModel;