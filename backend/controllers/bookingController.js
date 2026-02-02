const Booking = require('../models/Booking');
const { sendBookingConfirmation } = require('../utils/emailService');

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Public/Private
const getBookings = async (req, res) => {
  try {
    let query = {};
    if (req.user) {
      if (req.user.role === 'user') {
        query.userId = req.user._id;
      } else if (req.user.role === 'vendor') {
        query.vendorId = req.user._id;
      }
    }
    
    const bookings = await Booking.find(query)
      .populate('serviceId')
      .populate('productId')
      .populate('userId', 'name email phone');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create booking
// @route   POST /api/bookings
// @access  Private
const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      ...req.body,
      userId: req.user._id
    });

    await sendBookingConfirmation(req.body.email, req.body);

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update booking status
// @route   PUT /api/bookings/:id/status
// @access  Private/Vendor/Admin
const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (booking) {
      booking.status = req.body.status;
      const updatedBooking = await booking.save();
      res.json(updatedBooking);
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBookings, createBooking, updateBookingStatus };
