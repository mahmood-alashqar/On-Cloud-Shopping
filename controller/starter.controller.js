const superagent = require('superagent');
const Product = require('../model/starter.model');
const axios = require('axios');
async function superagentData(req, res) {
    //    `https://asos2.p.rapidapi.com/products/v2/list?categoryId=4209&store=US&offset=0&limit=48`;
  //   const superagentAPI ={
  //       method: 'GET',
  //       url: 'https://asos2.p.rapidapi.com/products/v2/list',
  //       params: {
  //         store: 'US',
  //         offset: '0',
  //         categoryId: '4209',
  //         limit: '48',
  //         country: 'US',
  //         sort: 'freshness',
  //         currency: 'USD',
  //         sizeSchema: 'US',
  //         lang: 'en-US'
  //       },
  //       headers: {
  //         'X-RapidAPI-Key': '4e5dbf132emsh8ed4253758e3f2bp1490dbjsna233acb3a22a',
  //         'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
  //       }
  //     };      
  // let returndData = [];
  // superagent.get(superagentAPI).then(data => {
  //   returndData = data.body.products.map(mapingData => {
  //     console.log(mapingData);
  //     return mapingData;
  //   })
  //   res.send(returndData);
  // })

const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v2/list',
  params: {
    store: 'US',
    offset: '0',
    categoryId: '4209',
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
let returndData = [];
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