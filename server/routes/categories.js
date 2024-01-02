const express = require('express');
const router = express.Router();
const Category = require('../model/Category');

// Create a new product category
router.post('/', async (req, res) => {
  try {
    const { name }= req.body;

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({ error: 'Category already exists' });
    };

    const newCategory = new Category({ name });



    const savedCategory = await newCategory.save();

    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all product categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();

    // Validate
    if (!categories || categories.length === 0) {
        return res.status(404).json({ error: 'No Categories not found' });
      }
  
    // Return the products
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a specific product category by ID
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    
    // Validate
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a product category by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a product category by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(
      req.params.id
    );

    // Validate the category
    if (!deletedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
