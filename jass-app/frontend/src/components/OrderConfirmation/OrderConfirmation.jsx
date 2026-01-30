import React from "react";
import {
  ConfirmationContainer,
  ConfirmationCard,
  Icon,
  Title,
  Message,
  BookingDetails,
  Detail,
  Label,
  Value,
  CloseButton,
} from "./OrderConfirmation.styles";

const OrderConfirmation = ({ booking, onClose }) => {
  if (!booking) return null;

  return (
    <ConfirmationContainer>
      <ConfirmationCard>
        <Icon>✓</Icon>
        <Title>Booking Confirmed!</Title>
        <Message>
          Your appointment is booked. We've sent a confirmation to your email.
        </Message>
        <BookingDetails>
          <Detail>
            <Label>Order ID:</Label>
            <Value>#{booking._id.slice(-8)}</Value>
          </Detail>
          <Detail>
            <Label>Date:</Label>
            <Value>{new Date(booking.preferredDate).toLocaleDateString()}</Value>
          </Detail>
          <Detail>
            <Label>Time:</Label>
            <Value>{booking.preferredTime}</Value>
          </Detail>
        </BookingDetails>
        <CloseButton onClick={onClose}>Done</CloseButton>
      </ConfirmationCard>
    </ConfirmationContainer>
  );
};

export default OrderConfirmation;
