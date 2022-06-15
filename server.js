//loading/require package
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const app =express();
app.use(cors());
app.use(express.json());
const DB = process.env.DATABASE_URL;
mongoose.connect(`${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
const getProducts = require('./controller/starter.controller');  


app.get('/',(req,res)=> {res.send('its Working')});


app.get('/products', getProducts);





app.listen(PORT,()=>console.log(`Server Running On ${PORT}`));