const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Order = require('../models/orders');
const OrderItems  = require('../models/orderItem');


//Create order
router.post('/', async (req,res)=>{
    try {
        const orderItemsIds = Promise.all(req.body.orderItem.map(async (orderItem) =>{
            let newOrderItem = new OrderItems({
                quantity: orderItem.quantity,
                product: orderItem.product
            })
    
            newOrderItem = await newOrderItem.save();
    
            return newOrderItem._id;
        }))
        const orderItemsIdsResolved =  await orderItemsIds;
    
        const totalPrices = await Promise.all(orderItemsIdsResolved.map(async (orderItemId)=>{
            const orderItem = await OrderItems.findById(orderItemId).populate('product', 'price');
            const totalPrice = orderItem.product.price * orderItem.quantity;
            return totalPrice
        }))
    
        const totalPrice = totalPrices.reduce((a,b) => a +b , 0);
    
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
        })
        order = await order.save();
    
        if(!order)
        return res.status(400).send('the order cannot be created!')
    
        res.send(order);
    } catch (error) {
        res.status(500).json(error.message) 
    }
});



//Get all orders
router.get(`/all`, async (req, res) =>{
    try {
        const orderList = await Order.find().populate('user', 'name').sort({'dateOrdered': -1});

    if(!orderList) {
        res.status(300).json('No orders at the moment!')
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
        return res.status(400).send('the order cannot be update!')
    
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
        const order = Order.findByIdAndDelete(req.params.id);

        if(order) {
            await order.orderItems.map(async orderItem => {
                await OrderItems.findByIdAndDelete(orderItem)
            })
            return res.status(200).json('Order is deleted!')
        } else {
            return res.status(404).json('Order not found!')
        }
    } catch (error) {
        return res.status(500).json(error.message) ;
    }
});




// Get userOrders by userId
// Get number of orders
// Get total sales




module.exports = router;