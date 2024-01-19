const mongoose = require('mongoose');

const productSchema = new mongoose.Schema([{
  
    name: { 
    type: String, 
    required: true 
},

image: { 
  type: String, 
  required: true 
},


  description: { 
    type: String, 
    required: true 
},

  currentPrice: { 
    type: Number, 
    required: true 
},

  oldPrice: { 
    type: Number, 
    required: true 
},

  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category', 
    required: false 
},


}]);

/// Create a virtual field for the discount percentage
productSchema.virtual('discount').get(function () {
  if (this.oldPrice <= 0) {
    // Avoid division by zero
    return 0;
  }

  const discount = ((this.oldPrice - this.currentPrice) / this.oldPrice) * 100;

  return Math.round(discount * 100) / 100; // Round to two decimal places
});

// Enable the toJSON option to include virtuals
productSchema.set('toJSON', { virtuals: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
