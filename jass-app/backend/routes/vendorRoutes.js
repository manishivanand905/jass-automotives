const express = require('express');
const router = express.Router();
const { loginVendor, forgotPassword, resetPassword } = require('../controllers/vendorController');

router.post('/login', loginVendor);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;
