const mongoose = require('mongoose');
const appConstants = require('../constants/app-constants')
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
const ProductsModel = new mongoose.model(appConstants.appConstants.DATA_BASE.dbName, productsShema);
module.exports = ProductsModel;