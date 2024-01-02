const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true },

  orderItems: [{ type: mongoose.Schema.Types.ObjectId, 
    ref: 'OrderItem', 
    required: true }],

  totalPrice: { 
    type: Number, 
    required: true },

    status: { 
      type: String, 
      required: true, 
      default: 'Pending' },

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
