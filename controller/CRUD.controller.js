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
    console.log("LiNE:44, req.body",req.body)
    console.log("LiNE:45, req.params",req.params.slug)

    ProductsModel.findOne({ slug: req.params.slug }, (error, data) => {
      if (error) {
        console.log("Line:  49  First If True  ==>",error )
        res.send(error);
      }
      else {
        console.log("Line:  54  First If False ==> ",data.name )

        data.name = name; 
        data.save().then(() => ProductsModel.find({}, (error, data) => res.send(data))).catch(error => {
          console.log('CRUD LiNE:58 ',error.response)
      })
      }
    })
  }

  module.exports={
getProducts,
postProduct,
deleteProduct,
updateProduct
  }