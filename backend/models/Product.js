const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['PPF', 'Ceramic Coating']
  },
  image: {
    type: String,
    required: true
  },
  logo: String,
  description: {
    type: String,
    required: true
  },
  detailedDescription: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  features: [{
    type: String
  }],
  specifications: {
    hardness: String,
    warranty: String,
    layers: String,
    thickness: String
  },
  addons: [{
    id: String,
    title: String,
    description: String,
    price: String,
    included: [String]
  }],
  applicationType: {
    type: String,
    enum: ['At Store', 'Outside by Customer'],
    default: 'At Store'
  },
  vendorLocation: {
    type: String
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor'
  },
  vendorAdded: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
