const superagent = require('superagent');
const Product = require('../model/starter.model');
const axios = require('axios');
const headers =require('../constants/api-constants');
let returndData = [];



async function superagentData(req, res) {

const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v2/list',
  params: {
    store: 'US',
    offset: '0',
    categoryId: '4209' ,
    limit: '48',
    country: 'US',
    sort: 'freshness',
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US'
  },
  headers: {
    'X-RapidAPI-Key':process.env.API_Key,
    'X-RapidAPI-Host': process.env.API_Host
  }
};
axios.request(options).then(data => {
  returndData =  data.data.products.map(mappingData=>{
    return new Product(mappingData);
  })
  res.send(returndData);
}).catch(function (error) {
	console.error(error);
});
}
module.exports = superagentData;