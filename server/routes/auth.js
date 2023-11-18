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
    } catch (error) {
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
       return res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (error) {
        res.status(500).json(error)
    }
  });


  module.exports =router;
