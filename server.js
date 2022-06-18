//loading/require package
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const app =express();
app.use(cors());
app.use(express.json());
const CRUD = require('./controller/CRUD.controller');

const DB = process.env.DATABASE_URL;
mongoose.connect(`${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
const getProducts = require('./controller/starter.controller');  


app.get('/',(req,res)=> {res.send('its Working')});


app.get('/products', getProducts);

app.post('/products/Favorite', CRUD.postProduct);
app.get('/products/Favorite', CRUD.getProducts);
app.delete('/products/Favorite/:slug', CRUD.deleteProduct);
app.put('/products/Favorite/:slug', CRUD.updateProduct);
app.post('/products/Favorite/:slug', CRUD.addComments);


app.listen(PORT,()=>console.log(`Server Running On ${PORT}`));