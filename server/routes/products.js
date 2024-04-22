const express = require('express');
const router = express.Router();
const Product = require('../model/Product');
const Category = require('../model/Category');

// Create a new product
router.post('/', async (req, res) => {
  try {
    const { name, image, description, currentPrice, oldPrice, category, tag, brand } = req.body;

    if(!(image && description)){
      return res.status(400).json({ error: 'All fields are required!' });

    }

    const existingProduct = await Product.findOne({ name, image, description, currentPrice, oldPrice, category });
    
    if (existingProduct) {
      return res.status(400).json({ error: 'Product already exists!' });
    };

    const newProduct = new Product({ name, image, description, currentPrice, oldPrice, category, tag, brand});

    const savedProduct = await newProduct.save();

    // Return created product
    res.status(201).json(savedProduct.toJSON());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all products
router.get('/', async (req, res) => { 
  try {
    const products = await Product.find()
    .populate('category');

    // Validate the products
    if (!products || products.length === 0) {
      return res.status(404).json({ error: 'No Product not found' });
    }

    // Return the products
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a specific product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    .populate('category');

    // Validate the product
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Return the product
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


// Get products based on category
router.get('/category/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const products = await Product.find({ category }).populate('category');
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get products based on tags
router.get('/tag', async (req, res) => {
  const { tag } = req.query;
  try {
    let query = {};
    if (tag) {
      query = { tags: { $in: tag.split(',') } }; // Fetch products with any of the specified categories
    }
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});



// Update a product by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    // Validate the product
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Return the updated product
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a product by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    
    // Validate the product
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Delete the product
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
