require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');



const port =process.env.PORT;

//middleware
app.use(express.json());


//Routes
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');
const verifyToken = require('./middleware/verifyToken');

app.use(`/auth`, authRoutes);
app.use(`/categories`, categoriesRoutes);
app.use(`/users`, verifyToken, usersRoutes);
app.use(`/products`, productsRoutes);
app.use(`/orders`, ordersRoutes);

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