const jwt = require('jsonwebtoken');
const Vendor = require('../models/Vendor');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @desc    Login vendor
// @route   POST /api/vendors/login
// @access  Public
const loginVendor = async (req, res) => {
  try {
    const { email, password } = req.body;

    const vendor = await Vendor.findOne({ email });

    if (vendor && (await vendor.matchPassword(password))) {
      res.json({
        _id: vendor._id,
        name: vendor.name,
        email: vendor.email,
        phone: vendor.phone,
        role: 'vendor',
        token: generateToken(vendor._id, 'vendor')
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { loginVendor };

// @desc    Forgot password
// @route   POST /api/vendors/forgot-password
// @access  Public
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const vendor = await Vendor.findOne({ email });

    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    const resetToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    vendor.resetPasswordToken = resetToken;
    vendor.resetPasswordExpire = Date.now() + 3600000; // 1 hour
    await vendor.save();

    res.json({ message: 'Password reset token generated', resetToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Reset password
// @route   POST /api/vendors/reset-password
// @access  Public
const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const vendor = await Vendor.findOne({ email });

    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    vendor.password = newPassword;
    vendor.resetPasswordToken = undefined;
    vendor.resetPasswordExpire = undefined;
    await vendor.save();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { loginVendor, forgotPassword, resetPassword };
