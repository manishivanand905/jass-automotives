const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create product
// @route   POST /api/products
// @access  Private/Vendor
const createProduct = async (req, res) => {
  try {
    const productData = {
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : undefined,
      vendorId: req.user._id,
      vendorAdded: true
    };
    
    if (req.body.specifications && typeof req.body.specifications === 'string') {
      productData.specifications = JSON.parse(req.body.specifications);
    }
    
    if (req.body.addons && typeof req.body.addons === 'string') {
      productData.addons = JSON.parse(req.body.addons);
    }
    
    if (req.body['features[]']) {
      productData.features = Array.isArray(req.body['features[]']) 
        ? req.body['features[]'] 
        : [req.body['features[]']];
      delete productData['features[]'];
    }
    
    const product = await Product.create(productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private/Vendor
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      const updateData = { ...req.body };
      
      if (req.file) {
        updateData.image = `/uploads/${req.file.filename}`;
      }
      
      if (req.body.specifications && typeof req.body.specifications === 'string') {
        updateData.specifications = JSON.parse(req.body.specifications);
      }
      
      if (req.body.addons && typeof req.body.addons === 'string') {
        updateData.addons = JSON.parse(req.body.addons);
      }
      
      if (req.body['features[]']) {
        updateData.features = Array.isArray(req.body['features[]']) 
          ? req.body['features[]'] 
          : [req.body['features[]']];
        delete updateData['features[]'];
      }
      
      Object.assign(product, updateData);
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private/Vendor
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
