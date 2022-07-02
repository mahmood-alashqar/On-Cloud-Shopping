const superagent = require('superagent');
const Product = require('../model/starter.model');
const axios = require('axios');
const headers =require('../constants/api-constants');
let returndData = [];
const apiConstant = require ( '../constants/api-constants')



async function superagentData(req, res) {

const options = {
  method: headers.apiConstants.RAPID_API.method,
  url: headers.apiConstants.RAPID_API.url,
  params: {
    store: headers.apiConstants.RAPID_API.store,
    offset: headers.apiConstants.RAPID_API.offset,
    categoryId: headers.apiConstants.RAPID_API.categoryId ,
    limit: headers.apiConstants.RAPID_API.limit,
    country: headers.apiConstants.RAPID_API.country,
    sort: headers.apiConstants.RAPID_API.sort,
    currency: headers.apiConstants.RAPID_API.currency,
    sizeSchema: headers.apiConstants.RAPID_API.sizeSchema,
    lang: headers.apiConstants.RAPID_API.lang
  },
  headers: {
    'X-RapidAPI-Key':headers.apiConstants.RAPID_API.key_value,
    'X-RapidAPI-Host': headers.apiConstants.RAPID_API.host_value
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