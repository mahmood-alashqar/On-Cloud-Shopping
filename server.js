const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const app =express();
app.use(cors());
app.use(express.json());
const getProducts = require('./controller/starter.controller');  
const CRUD = require('./controller/CRUD.controller');
const appConstants = require('./constants/app-constants')
const DB = process.env.MONGO_DB_CLOUD_URI;
//Connect DB
mongoose.connect(`${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


//Testing....
app.get(appConstants.appConstants.ENDPOINT.ROOT,(req,res)=> {res.send('its Working')});

//Fetch From Out-Source Api
app.get(appConstants.appConstants.ENDPOINT.GET_PRODUCTS, getProducts);
//Rest-Api
app.post(appConstants.appConstants.ENDPOINT.REST_API, CRUD.postProduct);
app.get(appConstants.appConstants.ENDPOINT.REST_API, CRUD.getProducts);
app.delete(`${appConstants.appConstants.ENDPOINT.REST_API}${appConstants.appConstants.ENDPOINT.SLUG}`, CRUD.deleteProduct);
app.put(`${appConstants.appConstants.ENDPOINT.REST_API}${appConstants.appConstants.ENDPOINT.SLUG}`, CRUD.updateProduct);
app.post(`${appConstants.appConstants.ENDPOINT.REST_API}${appConstants.appConstants.ENDPOINT.SLUG}`, CRUD.addComments);


app.listen(PORT,()=>console.log(`Server Running On ${PORT}`));
