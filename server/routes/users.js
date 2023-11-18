const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/users');


// Get all users
router.get('/all', async (req, res) =>{
    try {
        const userList = await User.find().select('-password');

        if(!userList) {
            res.status(500).json({success: false})
        } 
        res.send(userList);
    } catch (error) {
        res.status(500).json(error)
    }
   
})



// Get user by id
router.get('/:id', async(req,res)=>{

    const userId=req.params.id

    try {
        const user = await User.findById(userId).select('-passwordHash');

        if(!user) {
        res.status(500).json({message: 'The user with the given ID was not found.'})
    }  
    res.status(200).send(user);
    } catch (error) {
        res.status(500).json(error)
    }
   
})




// UPdate user by id
router.put('/:id',async (req, res)=> {
    try {
        const userExist = await User.findById(req.params.id);
        let newPassword
        
        // Edt password and hash
        if(req.body.password) {
            newPassword = bcrypt.hashSync(req.body.password, 10)
        } else {
            newPassword = userExist.password;
        }

        // Edit other details 
        const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            street: req.body.street,
            apartment: req.body.apartment,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
        },
        { new: true}
    )

    if(!user)
    return res.status(400).send('the user cannot be created!')

    res.send(user);
        
    } catch (error) {
        res.status(500).json(error)
    }
    
})




// Delete user
router.delete('/:id', async(req, res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user) {
            return res.status(404).json({success: false , message: "user not found!"})
        } 
        res.status(200).json({success: true, message: 'User deleted successfully!'})
    } catch (error) {
        res.status(500).json(error) 
    }
   
})



// Get total number of users
router.get('/all/users', async (req, res) =>{
    try {
        const userCount = await User.countDocuments();

    if(!userCount) {
    return res.status(500).json({message: 'No Users', success: false})
    } 
    res.status(200).send(`${userCount} Users`);
    } catch (error) {
       return res.status(500).json(error) 
    }   
})


module.exports =router;