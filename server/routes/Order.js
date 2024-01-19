const express = require('express');
const router = express.Router();
const Order = require('../model/Order');
const OrderItem  = require('../model/OrderItem');
const User  = require('../model/User');


// Create a new order
router.post('/', async (req, res) => {
  try {
    const { orderItems, status, user } = req.body;

    // Validate if the user exists
    const existingUser = await User.findOne({ _id: user });

    if (!existingUser) {
      return res.status(400).json({ error: 'User does not exist!' });
    }

     // Validate if there are orderItems
     const existingOrderItem = await OrderItem.findById({_id: orderItems})

     if (!existingOrderItem || existingOrderItem.length === 0) {
      return res.status(400).json({ error: 'Order must have at least one orderItem!' });
    }
  
    // Validate if order already exists for the user
    const existingOrder = await Order.findOne({ orderItems, status, user });

    if (existingOrder) {
      return res.status(400).json({ error: 'Order already exists!' });
    }

    // Create a new order instance
    const newOrder = new Order({
      orderItems,
      status,
      user,
    });

    // Save the order to the database
    const savedOrder = await newOrder.save();

    // Return the Order
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});




// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
    .populate('user', 'firstName lastName')
    .populate({
      path: 'orderItems',
      populate: {
        path: 'product',
      }});
        

    // Validate the orders
     if (!orders || orders.length === 0) {
        return res.status(404).json({ error: 'No orders at the moment' });
      }

    // Return the orders
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    .populate('user', 'firstName lastName')
    .populate({
        path: 'orderItems',
        populate: {
          path: 'product',
        }});
    
    // Validate the order
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Return the order
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get userOrders by userId
router.get(`/get/userorders/:userid`, async (req, res) =>{

    const userOrderList = await Order.find({user: req.params.userid})
    .populate({ 
        path: 'orderItems', populate: {
            path : 'product', populate: 'category'} 
        }).sort({'dateOrdered': -1})
    .populate('user', 'firstName');

    if(!userOrderList || userOrderList.length === 0) {
       return res.status(500).json('No oder yet')
    } 
    res.send(userOrderList);
});


// Update an order by ID
router.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//  Delete order and orderItem
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

        if(!orderCount || orderCount.length === 0) {
          return  res.status(500).json(`${orderCount} order`)
        } 

        res.status(200).send(`${orderCount} orders`);
    } catch (error) {
        return res.status(500).json(error.message);
    }

})

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

module.exports = router;
