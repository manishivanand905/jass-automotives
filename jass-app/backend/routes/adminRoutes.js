const express = require("express");
const router = express.Router();
const {
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
} = require("../controllers/adminController");
const { protect, admin } = require("../middleware/authMiddleware");

// Password reset routes (public)
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

// Dashboard stats
router.get("/stats", protect, admin, getDashboardStats);

// Users management
router.get("/users", protect, admin, getAllUsers);
router.put("/users/:id/status", protect, admin, updateUserStatus);
router.delete("/users/:id", protect, admin, deleteUser);

// Bookings management
router.get("/bookings", protect, admin, getAllBookings);
router.put("/bookings/:id/status", protect, admin, updateBookingStatus);

// Analytics
router.get("/orders-by-store", protect, admin, getOrdersByStore);
router.get("/services-breakdown", protect, admin, getServicesBreakdown);

// Services & Products management
router.delete("/services/:id", protect, admin, deleteService);
router.delete("/products/:id", protect, admin, deleteProduct);

// Vendors management
router.post("/vendors", protect, admin, createVendor);
router.get("/vendors", protect, admin, getAllVendors);
router.put("/vendors/:id", protect, admin, updateVendor);
router.put("/vendors/:id/status", protect, admin, updateVendorStatus);
router.delete("/vendors/:id", protect, admin, deleteVendor);

module.exports = router;
