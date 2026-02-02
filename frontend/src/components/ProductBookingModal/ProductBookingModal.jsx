import React, { useState, useEffect, useCallback } from "react";
import { bookingService } from "../../services/bookingService";
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
} from "../BookingModal/BookingModal.styles";

const TIME_SLOTS = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

const ProductBookingModal = ({ product, totalAmount, onClose, selectedAddons = [], applicationType = 'store' }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carCompany: "",
    carModel: "",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    setFormData((prev) => ({
      ...prev,
      name: userData.name || "",
      email: userData.email || "",
      phone: userData.phone || "",
    }));
  }, []);

  const fetchAvailableSlots = useCallback(async () => {
    setLoadingSlots(true);
    try {
      const allBookings = await bookingService.getBookings();
      const dateBookings = allBookings.filter(
        (b) =>
          b.preferredDate === formData.date && b.productId?._id === product._id,
      );

      const slotCounts = {};
      dateBookings.forEach((b) => {
        slotCounts[b.preferredTime] = (slotCounts[b.preferredTime] || 0) + 1;
      });

      const available = TIME_SLOTS.map((slot) => ({
        time: slot,
        available: 10 - (slotCounts[slot] || 0),
        disabled: (slotCounts[slot] || 0) >= 10,
      }));

      setTimeSlots(available);
    } catch (err) {
      console.error("Error fetching slots:", err);
      setTimeSlots(
        TIME_SLOTS.map((slot) => ({
          time: slot,
          available: 10,
          disabled: false,
        })),
      );
    } finally {
      setLoadingSlots(false);
    }
  }, [formData.date, product._id]);

  useEffect(() => {
    if (formData.date) {
      fetchAvailableSlots();
    }
  }, [formData.date, fetchAvailableSlots]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const isAuth = localStorage.getItem('isAuthenticated') === 'true';
    const role = localStorage.getItem('userRole');
    
    if (!isAuth || role !== 'user') {
      alert('Please login to book a product');
      window.location.href = '/login';
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      const bookingData = {
        productId: product._id,
        vendorId: product.vendorId,
        customerName: formData.name,
        email: formData.email,
        phone: formData.phone,
        carMake: formData.carCompany,
        carModel: formData.carModel,
        preferredDate: formData.date,
        preferredTime: formData.time,
        additionalNotes: formData.message,
        amount: totalAmount,
        applicationType: applicationType === 'store' ? 'At Store' : 'Outside by Customer',
        selectedAddons: selectedAddons
      };

      const newBooking = await bookingService.createBooking(bookingData);

      setConfirmedBooking(newBooking);
      setIsSubmitted(true);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to create booking. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return <OrderConfirmation booking={confirmedBooking} onClose={onClose} />;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Book Product</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        <ModalBody>
          <>
            <ServiceInfo>
              <ServiceName>{product.name}</ServiceName>
              <ServicePrice>{totalAmount}</ServicePrice>
            </ServiceInfo>

            {error && (
              <div
                style={{
                  padding: "12px",
                  background: "#fee",
                  color: "#c00",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              >
                {error}
              </div>
            )}

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Full Name *</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  readOnly
                  style={{ backgroundColor: "#f5f5f5", cursor: "not-allowed" }}
                />
              </FormGroup>

              <FormGroup>
                <Label>Email *</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  readOnly
                  style={{ backgroundColor: "#f5f5f5", cursor: "not-allowed" }}
                />
              </FormGroup>

              <FormGroup>
                <Label>Phone Number *</Label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  readOnly
                  style={{ backgroundColor: "#f5f5f5", cursor: "not-allowed" }}
                />
              </FormGroup>

              <FormGroup>
                <Label>Car Company *</Label>
                <Input
                  type="text"
                  name="carCompany"
                  value={formData.carCompany}
                  onChange={handleChange}
                  placeholder="e.g., Toyota, Honda, BMW"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Car Model *</Label>
                <Input
                  type="text"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleChange}
                  placeholder="e.g., Camry, Civic, X5"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Preferred Date *</Label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Preferred Time Slot *</Label>
                {!formData.date ? (
                  <div
                    style={{
                      padding: "12px",
                      background: "#f5f5f5",
                      borderRadius: "8px",
                      color: "#666",
                      fontSize: "14px",
                    }}
                  >
                    Please select a date first
                  </div>
                ) : loadingSlots ? (
                  <div
                    style={{
                      padding: "12px",
                      background: "#f5f5f5",
                      borderRadius: "8px",
                      color: "#666",
                      fontSize: "14px",
                    }}
                  >
                    Loading available slots...
                  </div>
                ) : (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "10px",
                    }}
                  >
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() =>
                          !slot.disabled &&
                          setFormData({ ...formData, time: slot.time })
                        }
                        disabled={slot.disabled}
                        style={{
                          padding: "12px",
                          border:
                            formData.time === slot.time
                              ? "2px solid #667eea"
                              : "2px solid #ddd",
                          borderRadius: "8px",
                          background: slot.disabled
                            ? "#f5f5f5"
                            : formData.time === slot.time
                              ? "#667eea"
                              : "white",
                          color: slot.disabled
                            ? "#999"
                            : formData.time === slot.time
                              ? "white"
                              : "#333",
                          cursor: slot.disabled ? "not-allowed" : "pointer",
                          fontSize: "14px",
                          fontWeight: "600",
                          transition: "all 0.2s",
                        }}
                      >
                        {slot.time}
                        <div
                          style={{
                            fontSize: "11px",
                            marginTop: "4px",
                            opacity: 0.8,
                          }}
                        >
                          {slot.disabled ? "Full" : `${slot.available} left`}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Additional Notes</Label>
                <TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special requests or vehicle details..."
                  rows="4"
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={loading}>
                {loading ? "Booking..." : "Confirm Booking"}
              </SubmitButton>
            </Form>
          </>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ProductBookingModal;
