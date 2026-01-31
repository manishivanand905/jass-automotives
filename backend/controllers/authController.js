const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Admin = require('../models/Admin');
const Vendor = require('../models/Vendor');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;

    let Model, userRole;
    
    if (role === 'admin') {
      Model = Admin;
      userRole = 'admin';
    } else if (role === 'vendor') {
      Model = Vendor;
      userRole = 'vendor';
    } else {
      Model = User;
      userRole = 'user';
    }

    const existingUser = await Model.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await Model.create({ name, email, phone, password });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: userRole,
      token: generateToken(user._id, userRole)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check in all three tables
    let user = await User.findOne({ email });
    let role = 'user';

    if (!user) {
      user = await Admin.findOne({ email });
      role = 'admin';
    }

    if (!user) {
      user = await Vendor.findOne({ email });
      role = 'vendor';
    }

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: role,
        token: generateToken(user._id, role)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = async (req, res) => {
  try {
    let user;
    
    if (req.user.role === 'admin') {
      user = await Admin.findById(req.user._id).select('-password');
    } else if (req.user.role === 'vendor') {
      user = await Vendor.findById(req.user._id).select('-password');
    } else {
      user = await User.findById(req.user._id).select('-password');
    }

    if (user) {
      res.json({ ...user.toObject(), role: req.user.role });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };
