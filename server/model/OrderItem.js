const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema([{
  
    product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', 
        required: true 
    },

  quantity: { 
    type: Number, 
    required: true 
},

  price: { 
    type: Number, 
    ref: 'Product', 
    required: true  
  }

}]);

// Define a virtual field for totalAmount
orderItemSchema.virtual('totalAmount').get(function () {
  return this.quantity * this.price;
});

// Include 'totalAmount' in the schema
orderItemSchema.set('toObject', { virtuals: true });
orderItemSchema.set('toJSON', { virtuals: true });


const OrderItem = mongoose.model('OrderItem', orderItemSchema);

module.exports = OrderItem;
