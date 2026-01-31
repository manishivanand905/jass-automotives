const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Repair', 'Detailing', 'Body Shop']
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  detailedDescription: {
    type: String,
    required: true
  },
  keyPoints: [{
    type: String
  }],
  duration: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  review: String,
  reviewAuthor: String,
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

module.exports = mongoose.model('Service', serviceSchema);
