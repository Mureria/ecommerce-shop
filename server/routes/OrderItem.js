const express = require('express');
const router = express.Router();
const OrderItem = require('../model/OrderItem');

// Create a new order item
router.post('/', async (req, res) => {
  try {
    const { product, quantity, price } = req.body;

    const existingOrderItem = await OrderItem.findOne({ product, quantity, price });
    
    if (existingOrderItem) {
      return res.status(400).json({ error: 'OrderItem already exists!' });
    };


    const newOrderItem = new OrderItem({product, quantity, price, });
    const savedOrderItem = await newOrderItem.save();

    res.status(201).json(savedOrderItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all order items
router.get('/', async (req, res) => {
  try {
    const orderItems = await OrderItem.find();
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific order item by ID
router.get('/:id', async (req, res) => {
  try {
    const orderItem = await OrderItem.findById(req.params.id);

    if (!orderItem) {
      return res.status(404).json({ error: 'Order item not found' });
    }

    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;

   


