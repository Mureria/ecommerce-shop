const express = require('express');
const router = express.Router();
const OrderItem = require('../model/OrderItem');
const Product = require('../model/Product');


// Create a new order item
router.post('/', async (req, res) => {
  try {
    const { product, quantity, price } = req.body;

    const existingOrderItem = await OrderItem.findOne({ product, quantity, price });
    
    if (existingOrderItem) {
      return res.status(400).json({ error: 'OrderItem already exists!' });
    };

    const existingProduct = await Product.findById({_id: product})

     if (!existingProduct || existingProduct.length === 0) {
      return res.status(400).json({ error: 'OrderItem must have at least one product!' });
    }

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

    if(!orderItems || orderItems.length === 0 ){
      return res.status(400).json({ error: 'OrderItem not found' });
    }
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


// Delete orderItem
router.delete('/:id', async (req, res) => {
  try {
    const deletedOrderItem = await OrderItem.findByIdAndDelete(req.params.id);
    
    // Validate the product
    if (!deletedOrderItem || deletedOrderItem === 0) {
      return res.status(404).json({ error: 'OrderItem not found' });
    }

    // Delete the product
    res.status(200).json({ message: 'OrderItem deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;

   


