const User = require('../models/User');
const Vendor = require('../models/Vendor');
const Service = require('../models/Service');
const Product = require('../models/Product');
const Booking = require('../models/Booking');

// @desc    Get dashboard stats
// @route   GET /api/admin/stats
// @access  Private/Admin
const getDashboardStats = async (req, res) => {
  try {
    const totalOrders = await Booking.countDocuments();
    const pendingOrders = await Booking.countDocuments({ status: 'Pending' });
    const completedOrders = await Booking.countDocuments({ status: 'Completed' });
    const totalVendors = await Vendor.countDocuments();
    const totalServices = await Service.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalUsers = await User.countDocuments({ role: 'user' });
    
    const productOrders = await Booking.countDocuments({ productId: { $exists: true, $ne: null } });
    const serviceOrders = await Booking.countDocuments({ serviceId: { $exists: true, $ne: null } });

    // Calculate total revenue from completed bookings
    const completedBookings = await Booking.find({ status: 'Completed' });
    const totalRevenue = completedBookings.reduce((sum, booking) => {
      const amount = booking.amount?.replace(/[₹,]/g, '') || '0';
      return sum + parseFloat(amount);
    }, 0);

    // Get vendor orders count
    const vendorOrdersData = await Booking.aggregate([
      {
        $group: {
          _id: '$vendorId',
          orderCount: { $sum: 1 }
        }
      }
    ]);
    
    const vendorOrders = await Promise.all(
      vendorOrdersData.map(async (vo) => {
        const vendor = await Vendor.findById(vo._id);
        return {
          _id: vo._id,
          vendorName: vendor?.name || 'Unknown',
          orderCount: vo.orderCount
        };
      })
    );

    res.json({
      totalOrders,
      pendingOrders,
      completedOrders,
      totalVendors,
      totalServices,
      totalProducts,
      totalUsers,
      totalRevenue,
      productOrders,
      serviceOrders,
      vendorOrders
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: 'user' }).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all bookings
// @route   GET /api/admin/bookings
// @access  Private/Admin
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({})
      .populate('userId', 'name email phone')
      .populate('serviceId', 'title price')
      .populate('productId', 'name price')
      .populate('vendorId', 'name')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get orders by store
// @route   GET /api/admin/orders-by-store
// @access  Private/Admin
const getOrdersByStore = async (req, res) => {
  try {
    const ordersByStore = await Booking.aggregate([
      {
        $group: {
          _id: '$location',
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          store: '$_id',
          orders: '$count',
          _id: 0
        }
      }
    ]);
    res.json(ordersByStore);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get services breakdown
// @route   GET /api/admin/services-breakdown
// @access  Private/Admin
const getServicesBreakdown = async (req, res) => {
  try {
    const servicesBreakdown = await Booking.aggregate([
      {
        $lookup: {
          from: 'services',
          localField: 'serviceId',
          foreignField: '_id',
          as: 'service'
        }
      },
      {
        $unwind: '$service'
      },
      {
        $group: {
          _id: '$service.title',
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          service: '$_id',
          count: '$count',
          _id: 0
        }
      },
      {
        $sort: { count: -1 }
      }
    ]);
    res.json(servicesBreakdown);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update user status
// @route   PUT /api/admin/users/:id/status
// @access  Private/Admin
const updateUserStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.status = req.body.status;
      await user.save();
      res.json({ message: 'User status updated' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.deleteOne();
      res.json({ message: 'User removed' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete service
// @route   DELETE /api/admin/services/:id
// @access  Private/Admin
const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      await service.deleteOne();
      res.json({ message: 'Service removed' });
    } else {
      res.status(404).json({ message: 'Service not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete product
// @route   DELETE /api/admin/products/:id
// @access  Private/Admin
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

// @desc    Update booking status
// @route   PUT /api/admin/bookings/:id/status
// @access  Private/Admin
const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (booking) {
      booking.status = req.body.status;
      await booking.save();
      res.json({ message: 'Booking status updated', booking });
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create vendor
// @route   POST /api/admin/vendors
// @access  Private/Admin
const createVendor = async (req, res) => {
  try {
    const { name, email, phone, location, username, password } = req.body;
    
    const vendorExists = await Vendor.findOne({ email });
    if (vendorExists) {
      return res.status(400).json({ message: 'Vendor already exists' });
    }

    const vendor = await Vendor.create({
      name,
      email,
      phone,
      location,
      username,
      password
    });

    res.status(201).json({
      _id: vendor._id,
      name: vendor.name,
      email: vendor.email,
      phone: vendor.phone,
      location: vendor.location,
      username: vendor.username,
      status: vendor.status
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all vendors
// @route   GET /api/admin/vendors
// @access  Private/Admin
const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find({}).select('-password');
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update vendor status
// @route   PUT /api/admin/vendors/:id/status
// @access  Private/Admin
const updateVendorStatus = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (vendor) {
      vendor.status = req.body.status;
      await vendor.save();
      res.json({ message: 'Vendor status updated' });
    } else {
      res.status(404).json({ message: 'Vendor not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete vendor
// @route   DELETE /api/admin/vendors/:id
// @access  Private/Admin
const deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (vendor) {
      await vendor.deleteOne();
      res.json({ message: 'Vendor removed' });
    } else {
      res.status(404).json({ message: 'Vendor not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update vendor
// @route   PUT /api/admin/vendors/:id
// @access  Private/Admin
const updateVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (vendor) {
      vendor.name = req.body.name || vendor.name;
      vendor.email = req.body.email || vendor.email;
      vendor.phone = req.body.phone || vendor.phone;
      vendor.location = req.body.location || vendor.location;
      vendor.username = req.body.username || vendor.username;
      
      if (req.body.password) {
        vendor.password = req.body.password;
      }

      const updatedVendor = await vendor.save();
      res.json({
        _id: updatedVendor._id,
        name: updatedVendor.name,
        email: updatedVendor.email,
        phone: updatedVendor.phone,
        location: updatedVendor.location,
        username: updatedVendor.username,
        status: updatedVendor.status
      });
    } else {
      res.status(404).json({ message: 'Vendor not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDashboardStats,
  getAllUsers,
  getAllBookings,
  getOrdersByStore,
  getServicesBreakdown,
  updateUserStatus,
  deleteUser,
  deleteService,
  deleteProduct,
  updateBookingStatus,
  createVendor,
  getAllVendors,
  updateVendorStatus,
  deleteVendor,
  updateVendor
};

// @desc    Forgot password (Admin)
// @route   POST /api/admin/forgot-password
// @access  Public
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpire = Date.now() + 3600000; // 1 hour
    await user.save();

    res.json({ message: 'Password reset token generated', resetToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Reset password (Admin)
// @route   POST /api/admin/reset-password
// @access  Public
const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDashboardStats,
  getAllUsers,
  getAllBookings,
  getOrdersByStore,
  getServicesBreakdown,
  updateUserStatus,
  deleteUser,
  deleteService,
  deleteProduct,
  updateBookingStatus,
  createVendor,
  getAllVendors,
  updateVendorStatus,
  deleteVendor,
  updateVendor,
  forgotPassword,
  resetPassword
};
