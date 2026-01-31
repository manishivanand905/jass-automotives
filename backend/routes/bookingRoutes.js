const express = require('express');
const router = express.Router();
const { getBookings, createBooking, updateBookingStatus } = require('../controllers/bookingController');
const { protect, vendor } = require('../middleware/authMiddleware');

router.get('/', getBookings);
router.post('/', protect, createBooking);
router.put('/:id/status', protect, vendor, updateBookingStatus);

module.exports = router;
