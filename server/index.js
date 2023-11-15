require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const port =process.env.PORT;

//middleware
app.use(express.json());

//Routes
const usersRoutes = require('./routes/users');
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');


app.use(`/categories`, categoriesRoutes);
app.use(`/users`, usersRoutes);
app.use(`/products`, productsRoutes);

//Database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Database Connected')
})
.catch((err)=> {
    console.log(err);
})

//Server
app.listen(port, ()=>{

    console.log(`server is running on port ${port}`);
})