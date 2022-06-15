const ProductsModel = require('../model/mongoose.model');
async function getAnimation(req, res) {
    ProductsModel.find({}, (error, data) => res.send(data))
  }