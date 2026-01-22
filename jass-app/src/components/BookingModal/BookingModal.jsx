import React, { useState } from "react";
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
  SuccessMessage,
} from "./BookingModal.styles";

const BookingModal = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Booking submitted:", { service, ...formData });
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Book Service</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        <ModalBody>
          {!isSubmitted ? (
            <>
              <ServiceInfo>
                <ServiceName>{service.title}</ServiceName>
                <ServicePrice>{service.price}</ServicePrice>
              </ServiceInfo>

              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Full Name *</Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Email *</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Phone Number *</Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
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
                  <Label>Preferred Time *</Label>
                  <Input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
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

                <SubmitButton type="submit">Confirm Booking</SubmitButton>
              </Form>
            </>
          ) : (
            <SuccessMessage>
              <div style={{ fontSize: "60px", marginBottom: "20px" }}>✓</div>
              <h3>Booking Confirmed!</h3>
              <p>We'll contact you shortly to confirm your appointment.</p>
            </SuccessMessage>
          )}
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default BookingModal;
