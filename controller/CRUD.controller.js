const e = require('cors');
const ProductsModel = require('../model/mongoose.model');


async function getProducts(req, res) {
    ProductsModel.find({}, (error, data) => res.send(data))
  }


  async function postProduct(req, res) {
    const { name, slug, img, colour, price,brand } = req.body;
    ProductsModel.find({ slug: slug }, (error, data) => {
      if (error) {
        res.send(error);
      }
      else {
        const newProduct = new ProductsModel({
          name: name,
          slug: slug,
          img: img,
          colour: colour,
          price: price,
          brand:brand
        })
        newProduct.save();
        ProductsModel.find({}, (error, data) => res.send(data))
      }
    })
  }


  async function deleteProduct(req, res) {
    ProductsModel.deleteOne({ slug: req.params.slug }, (error, data) => {
      if (error) {
        res.send(error);
      }
      else {
        ProductsModel.find({}, (error, data) => res.send(data))
      }
    })
  }

  async function updateProduct(req, res) {
    const { name } = req.body;
    ProductsModel.findOne({ slug: req.params.slug }, (error, data) => {
      if (error) {
        res.send(error);
      }
      else {
        data.name = name; 
        data.save().then(() => ProductsModel.find({}, (error, data) => res.send(data))).catch(error => {
          console.log(error.response)
      })
      }
    })
  }

  async function addComments(req, res) {
    const { comment } = req.body;
    ProductsModel.findOne({ slug: req.params.slug }, (error, data) => {
      if (error) {
        res.send(error);
      }
      else {
        data.comments.push(comment); 
        data.save().then(() => ProductsModel.find({}, (error, data) => res.send(data))).catch(error => {
          console.log(error.response)
      })
      }
    })
  }

  module.exports={
getProducts,
postProduct,
deleteProduct,
updateProduct,
addComments
  }