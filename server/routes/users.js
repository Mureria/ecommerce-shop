const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');







router.post("/register", async (req, res) => {

    try {
      // Get user input
      const { name, email, password, phone, street, apartment, zip, city, country} = req.body;
  
      // Validate user input
      if (!(email && password && name && phone && street && apartment && zip && city && country)) {
        res.status(400).send("All input is required");
      }
  
      // Validate if user exist in our database
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = bcrypt.hashSync(req.body.password, 10);
  
      // Create user in our database
      const user = await User.create({
        name,
        email,
        password: encryptedPassword,
        phone,
        street,
        zip,
        apartment,
        city,
        country

      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
        res.status(500).json(error)
    }
  });



// Login user
router.post("/login", async (req, res) => {

    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });
  
      if(user && bcrypt.compareSync(req.body.password, user.password)) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
       return res.status(200).json('Successfully Logged In');
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
        res.status(500).json(error)
    }
  });




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