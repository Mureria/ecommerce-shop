const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  firstName: { 
    type: String, 
    required: true 
  },

  secondName: { 
    type: String, 
    required: true 
  },

  email: { 
    type: String, 
    required: true, 
    unique: true 
},

  password: { 
    type: String, 
    required: true 
},

  token: {
    type:String
  },

  role: { 
    type: String, 
    enum: ['user', 'admin'], 
    default: 'user' 
},

});

const User = mongoose.model('User', userSchema);

module.exports = User;
