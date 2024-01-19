const express = require('express');
const router = express.Router();
const Review = require('../model/Review');
const User = require('../model/User');
const Product = require('../model/Product');

// Create a new review
router.post('/', async (req, res) => {
  try {
    const { user, product, rating, comment } = req.body;

       // Validate if the user exists
       const existingUser = await User.findOne({ _id: user });

       if (!existingUser) {
         return res.status(400).json({ error: 'User does not exist!' });
       }
       // Validate if the product exists
       const products = await Product.findOne({ _id: product });

       if (!products) {
         return res.status(400).json({ error: 'product does not exist!' });
       }

    const existingReview = await Review.findOne({ user, product, rating, comment  });
    
    if (existingReview) {
      return res.status(400).json({ error: 'Review already exists!' });
    };
    const newReview = new Review({ user, product, rating, comment });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().populate('user', 'firstName lastName').populate('product', 'name');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get('/reviews/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    const reviews = await Review.find({ productId }).populate('userId', 'username');

    if(!reviews || reviews.length === 0 ){
      return  res.status(201).json('No reviews yet');

    }
    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a single review by ID
router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('user', 'firstName lastName').populate('product', 'name');
    if (!review) {
      return res.status(404).json({ error: 'Review not found nganuthia' });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a review by ID
router.put('/:id', async (req, res) => {
  try {
    const { user, product, rating, comment } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { user, product, rating, comment },
      { new: true }
    );
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a review by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
