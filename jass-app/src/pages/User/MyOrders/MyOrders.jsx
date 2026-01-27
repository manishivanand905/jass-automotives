import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../../../components/AnimatedWrapper';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import {
  OrdersWrapper,
  Container,
  PageTitle,
  OrdersGrid,
  OrderCard,
  OrderHeader,
  OrderId,
  OrderDate,
  OrderStatus,
  OrderContent,
  OrderService,
  OrderDetails,
  DetailRow,
  DetailLabel,
  DetailValue,
  ViewButton,
  EmptyState,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalSection,
  SectionTitle,
  InfoGrid
} from './MyOrders.styles';

const MyOrders = () => {
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Dummy orders data
  const orders = [
    {
      id: 'ORD-1001',
      date: '2024-01-20',
      status: 'Confirmed',
      service: 'Ceramic Coating',
      location: 'Film Nagar',
      carMake: 'Toyota',
      carModel: 'Camry',
      carYear: '2022',
      preferredDate: '2024-01-25',
      preferredTime: '10:00 AM',
      amount: '₹25,000',
      customerName: 'Mani Shivanand',
      email: 'shivanand128510@gmail.com',
      phone: '+917416161249',
      additionalNotes: 'Please ensure thorough cleaning before coating'
    },
    {
      id: 'ORD-1002',
      date: '2024-01-18',
      status: 'Completed',
      service: 'PPF Installation',
      location: 'Hi-Tech City',
      carMake: 'BMW',
      carModel: 'X5',
      carYear: '2023',
      preferredDate: '2024-01-22',
      preferredTime: '2:00 PM',
      amount: '₹45,000',
      customerName: 'Mani Shivanand',
      email: 'shivanand128510@gmail.com',
      phone: '+917416161249',
      additionalNotes: 'Full body PPF required'
    },
    {
      id: 'ORD-1003',
      date: '2024-01-15',
      status: 'Pending',
      service: 'Car Detailing',
      location: 'Secunderabad',
      carMake: 'Honda',
      carModel: 'City',
      carYear: '2021',
      preferredDate: '2024-01-28',
      preferredTime: '11:00 AM',
      amount: '₹8,000',
      customerName: 'Mani Shivanand',
      email: 'shivanand128510@gmail.com',
      phone: '+917416161249',
      additionalNotes: 'Interior and exterior detailing'
    },
    {
      id: 'ORD-1004',
      date: '2024-01-10',
      status: 'Completed',
      service: 'Dent & Paint Repair',
      location: 'Film Nagar',
      carMake: 'Hyundai',
      carModel: 'Creta',
      carYear: '2020',
      preferredDate: '2024-01-15',
      preferredTime: '3:00 PM',
      amount: '₹12,000',
      customerName: 'Mani Shivanand',
      email: 'shivanand128510@gmail.com',
      phone: '+917416161249',
      additionalNotes: 'Minor dent on rear door'
    }
  ];

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <PageTransition>
      <Header />
      <OrdersWrapper>
        <Container>
          <PageTitle>My Orders</PageTitle>
          
          {orders.length > 0 ? (
            <OrdersGrid>
              {orders.map((order) => (
                <OrderCard key={order.id}>
                  <OrderHeader>
                    <OrderId>Order #{order.id}</OrderId>
                    <OrderDate>{order.date}</OrderDate>
                  </OrderHeader>
                  <OrderStatus $status={order.status}>{order.status}</OrderStatus>
                  <OrderContent>
                    <OrderService>{order.service}</OrderService>
                    <OrderDetails>
                      <DetailRow>
                        <DetailLabel>Location:</DetailLabel>
                        <DetailValue>{order.location}</DetailValue>
                      </DetailRow>
                      <DetailRow>
                        <DetailLabel>Vehicle:</DetailLabel>
                        <DetailValue>{order.carMake} {order.carModel}</DetailValue>
                      </DetailRow>
                      <DetailRow>
                        <DetailLabel>Scheduled:</DetailLabel>
                        <DetailValue>{order.preferredDate} at {order.preferredTime}</DetailValue>
                      </DetailRow>
                      <DetailRow>
                        <DetailLabel>Amount:</DetailLabel>
                        <DetailValue style={{ color: '#cc0000', fontWeight: '700' }}>{order.amount}</DetailValue>
                      </DetailRow>
                    </OrderDetails>
                    <ViewButton onClick={() => handleViewDetails(order)}>View Details</ViewButton>
                  </OrderContent>
                </OrderCard>
              ))}
            </OrdersGrid>
          ) : (
            <EmptyState>
              <h3>No Orders Yet</h3>
              <p>You haven't booked any services yet.</p>
              <ViewButton onClick={() => navigate('/book-service')}>Book a Service</ViewButton>
            </EmptyState>
          )}
        </Container>
      </OrdersWrapper>

      {selectedOrder && (
        <>
          <ModalOverlay onClick={closeModal} />
          <Modal>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>Order Details - #{selectedOrder.id}</ModalTitle>
                <CloseButton onClick={closeModal}>×</CloseButton>
              </ModalHeader>
              <ModalBody>
                <ModalSection>
                  <SectionTitle>Service Information</SectionTitle>
                  <InfoGrid>
                    <DetailRow>
                      <DetailLabel>Service:</DetailLabel>
                      <DetailValue>{selectedOrder.service}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                      <DetailLabel>Status:</DetailLabel>
                      <OrderStatus $status={selectedOrder.status}>{selectedOrder.status}</OrderStatus>
                    </DetailRow>
                    <DetailRow>
                      <DetailLabel>Order Date:</DetailLabel>
                      <DetailValue>{selectedOrder.date}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                      <DetailLabel>Amount:</DetailLabel>
                      <DetailValue style={{ color: '#cc0000', fontWeight: '700' }}>{selectedOrder.amount}</DetailValue>
                    </DetailRow>
                  </InfoGrid>
                </ModalSection>

                <ModalSection>
                  <SectionTitle>Appointment Details</SectionTitle>
                  <InfoGrid>
                    <DetailRow>
                      <DetailLabel>Location:</DetailLabel>
                      <DetailValue>{selectedOrder.location}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                      <DetailLabel>Scheduled Date:</DetailLabel>
                      <DetailValue>{selectedOrder.preferredDate}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                      <DetailLabel>Scheduled Time:</DetailLabel>
                      <DetailValue>{selectedOrder.preferredTime}</DetailValue>
                    </DetailRow>
                  </InfoGrid>
                </ModalSection>

                <ModalSection>
                  <SectionTitle>Vehicle Information</SectionTitle>
                  <InfoGrid>
                    <DetailRow>
                      <DetailLabel>Make:</DetailLabel>
                      <DetailValue>{selectedOrder.carMake}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                      <DetailLabel>Model:</DetailLabel>
                      <DetailValue>{selectedOrder.carModel}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                      <DetailLabel>Year:</DetailLabel>
                      <DetailValue>{selectedOrder.carYear}</DetailValue>
                    </DetailRow>
                  </InfoGrid>
                </ModalSection>

                <ModalSection>
                  <SectionTitle>Customer Information</SectionTitle>
                  <InfoGrid>
                    <DetailRow>
                      <DetailLabel>Name:</DetailLabel>
                      <DetailValue>{selectedOrder.customerName}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                      <DetailLabel>Email:</DetailLabel>
                      <DetailValue>{selectedOrder.email}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                      <DetailLabel>Phone:</DetailLabel>
                      <DetailValue>{selectedOrder.phone}</DetailValue>
                    </DetailRow>
                  </InfoGrid>
                </ModalSection>

                {selectedOrder.additionalNotes && (
                  <ModalSection>
                    <SectionTitle>Additional Notes</SectionTitle>
                    <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6' }}>
                      {selectedOrder.additionalNotes}
                    </p>
                  </ModalSection>
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}

      <Footer />
    </PageTransition>
  );
};

export default MyOrders;
