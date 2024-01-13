const express = require('express');
const router = express.Router();
const verifyToken =require('../middleware/auth')

const User = require('../model/User');


// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');

    // Validate if there is users
    if(!users || users.length === 0){
        return res.status(200).json({ error: 'No Users Found!' })
    }

    // Return users found
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    // Validate the user existance
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the user with the Id
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a user by ID
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // Validate
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    //Return updated user 
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a user by ID
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    
    //Validate 
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return 
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


// Count the number of users
router.get('/get/users', async (req, res) => {
  try {
    const userCount = await User.countDocuments();

    res.json(`${userCount} users`);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Errorssss' });
  }
});

module.exports = router;
