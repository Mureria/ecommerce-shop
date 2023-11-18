const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Order = require('../models/orders');
const OrderItem  = require('../models/orderItem');



// Create order
router.post('/', async (req, res) => {
    try {
        // Create order items
        const orderItemsIds = await Promise.all(req.body.orderItems.map(async (orderItem) => {
            let newOrderItem = new OrderItem({
                quantity: orderItem.quantity,
                product: orderItem.product
            });

            newOrderItem = await newOrderItem.save();

            return newOrderItem._id;
        }));

        const orderItemsIdsResolved = await orderItemsIds;

        // Calculate total price
        const totalPrices = await Promise.all(orderItemsIdsResolved.map(async (orderItemId) => {
            const orderItem = await OrderItem.findById(orderItemId).populate('product', 'price');
            return orderItem.product.price * orderItem.quantity;
        }));

        const totalPrice = totalPrices.reduce((a, b) => a + b, 0);

        // Check if an order with the same details already exists
        const existingOrder = await Order.findOne({
            orderItems: orderItemsIdsResolved,
            shippingAddress1: req.body.shippingAddress1,
            shippingAddress2: req.body.shippingAddress2,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            status: req.body.status,
            totalPrice: totalPrice,
            user: req.body.user,
        });

        if (existingOrder) {
            // If order already exists, respond with a 200 status and a message
            return res.status(200).json('Order already exists!');
        }

        // Create a new order instance
        let order = new Order({
            orderItems: orderItemsIdsResolved,
            shippingAddress1: req.body.shippingAddress1,
            shippingAddress2: req.body.shippingAddress2,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            status: req.body.status,
            totalPrice: totalPrice,
            user: req.body.user,
        });

        // Save the new order
        order = await order.save();

        if (!order) {
            return res.status(400).send('The order cannot be created!');
        }

        res.status(201).send(order); 
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});





//Get all orders
router.get(`/all`, async (req, res) =>{
    try {
        const orderList = await Order.find();

    if(!orderList || orderList.length === 0) {
      return  res.status(300).json('No orders at the moment!')
    }

    res.status(200).send(orderList);
    } catch (error) {
        res.status(500).json(error.message) 
    }  
})



// Update order status
router.put('/:id',async (req, res)=> {
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status
            },
            { new: true}
        )
    
        if(!order)
        return res.status(400).send('Order failed to update!')
    
        res.send(order);
    } catch (error) {
        res.status(500).json(error.message); 
    }
   
})
  


// Get order by id
router.get(`/:id`, async (req, res) =>{
    try {
        const order = await Order.findById(req.params.id)
        .populate('user', 'name')
        .populate({ 
            path: 'orderItems', populate: {
                path : 'product', populate: 'category'} 
            });
    
        if(!order) {
           return res.status(500).json('Order does not exist!')
        } 
        res.send(order); 
    } catch (error) {
        res.status(500).json(error.message) 

    }
    
})



// Delete order and orderItem
router.delete('/:id', async(req, res)=>{
    try {
        const order = await Order.findByIdAndDelete(req.params.id);

        if(order) {
            await order.orderItems.map(async orderItem => {
                await OrderItem.findByIdAndDelete(orderItem)
            })
            return res.status(200).json('Order is deleted!')
        } else {
            return res.status(404).json('Order not found!')
        }
    } catch (error) {
        return res.status(500).json(error.message);
    }
});



// Get number of orders
router.get(`/get/count`, async (req, res) =>{
    try {
        const orderCount = await Order.countDocuments();

        if(!orderCount) {
          return  res.status(500).json(`${orderCount} order`)
        } 

        res.status(200).send(`${orderCount} orders`);
    } catch (error) {
        return res.status(500).json(error.message);
    }

})


// Get total sales
// Get total sales
router.get('/get/totalsales', async (req, res) => {
    try {
        const totalSales = await Order.aggregate([
            { $group: { _id: null, totalsales: { $sum: '$totalPrice' } } }
        ]);

        if (!totalSales || totalSales.length === 0) {
            return res.status(200).send('0 sales');
        }

        res.status(200).send(`${totalSales.pop().totalsales} sales`);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});


// Get userOrders by userId
router.get(`/get/userorders/:userid`, async (req, res) =>{
    const userOrderList = await Order.find({user: req.params.userid}).populate({ 
        path: 'orderItems', populate: {
            path : 'product', populate: 'category'} 
        }).sort({'dateOrdered': -1});

    if(!userOrderList) {
        res.status(500).json('Order not found')
    } 
    res.send(userOrderList);
})


module.exports = router;