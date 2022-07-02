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
const DB = process.env.MONGO_DB_CLOUD_URI;
//Connect DB
mongoose.connect(`${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


//Testing....
app.get('/',(req,res)=> {res.send('its Working')});

//Fetch From Out-Source Api
app.get('/products', getProducts);
//Rest-Api
app.post('/products/Favorite', CRUD.postProduct);
app.get('/products/Favorite', CRUD.getProducts);
app.delete('/products/Favorite/:slug', CRUD.deleteProduct);
app.put('/products/Favorite/:slug', CRUD.updateProduct);
app.post('/products/Favorite/:slug', CRUD.addComments);


app.listen(PORT,()=>console.log(`Server Running On ${PORT}`));
