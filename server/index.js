require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/User');
const productsRoutes = require('./routes/Products');
const categoryRoutes = require('./routes/Categories.js');
const orderItemsRoutes = require('./routes/OrderItem.js');
const orderRoutes = require('./routes/Order.js');
const reviewRoutes = require('./routes/Review.js');



const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/products', productsRoutes);
app.use('/categories', categoryRoutes);
app.use('/orderItems', orderItemsRoutes);
app.use('/order', orderRoutes);
app.use('/reviews', reviewRoutes);




// Db connection
mongoose.connect(process.env.MONGO_URI)
      .then(() => {
        console.log("Successfully connected to database");
      })
      .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });


app.listen(port, () => { console.log(`Server running on port ${port}`); });