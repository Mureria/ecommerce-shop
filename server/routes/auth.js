const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User');


router.post("/register", async (req, res) => {
  try {
    // Get user input
    const { firstName, secondName, email, password } = req.body;

    // Validate user input
    if (!(firstName && secondName && email && password)) {
      return res.status(400).send("All input is required");
    }

    // Validate if user exists in our database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).send("User Already Exists. Please Login");
    }


    // Encrypt user password
    const encryptedPassword = bcrypt.hashSync(req.body.password, 10);

    // Create user in our database
    const user = await User.create({
      firstName,
      secondName,
      email,
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.secret,
      {
        expiresIn: "2h",
      }
    );

    // Save user token
    user.token = token;

    // Return new user
    return res.status(201).json('Registered Successfully');
  } catch (error) {
    console.error(error);

    return res.status(500).json(error);
  }
});




// Login user
router.post("/login", async (req, res) => {

    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        return res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });
  
      if(user && bcrypt.compareSync(req.body.password, user.password)) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.secret,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
       return res.status(200).json("Login Successful");
      }
      return res.status(400).send("Invalid Credentials");
    } catch (error) {
       return res.status(500).json(error)
    }
  });


  module.exports =router;