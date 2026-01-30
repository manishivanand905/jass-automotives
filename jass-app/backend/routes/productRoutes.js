const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { protect, vendor } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.route('/')
  .get(getProducts)
  .post(protect, vendor, upload.single('image'), createProduct);

router.route('/:id')
  .get(getProductById)
  .put(protect, vendor, upload.single('image'), updateProduct)
  .delete(protect, vendor, deleteProduct);

module.exports = router;
