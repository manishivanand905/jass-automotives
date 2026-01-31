const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Admin = require('../models/Admin');
const Vendor = require('../models/Vendor');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      let user;
      if (decoded.role === 'admin') {
        user = await Admin.findById(decoded.id).select('-password');
      } else if (decoded.role === 'vendor') {
        user = await Vendor.findById(decoded.id).select('-password');
      } else {
        user = await User.findById(decoded.id).select('-password');
      }

      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      req.user = { ...user.toObject(), role: decoded.role, _id: user._id };
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as admin' });
  }
};

const vendor = (req, res, next) => {
  if (req.user && (req.user.role === 'vendor' || req.user.role === 'admin')) {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as vendor' });
  }
};

module.exports = { protect, admin, vendor };
