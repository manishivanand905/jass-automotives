const express = require('express');
const router = express.Router();
const { getServices, getServiceById, createService, updateService, deleteService } = require('../controllers/serviceController');
const { protect, vendor } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.route('/')
  .get(getServices)
  .post(protect, vendor, upload.single('image'), createService);

router.route('/:id')
  .get(getServiceById)
  .put(protect, vendor, upload.single('image'), updateService)
  .delete(protect, vendor, deleteService);

module.exports = router;
