import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../../../components/AnimatedWrapper';
import { bookingService } from '../../../services/bookingService';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import {
  OrdersWrapper,
  Container,
  PageTitle,
  SectionTitle as StyledSectionTitle,
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
  InfoGrid,
  ProductImage
} from './MyOrders.styles';

const MyOrders = () => {
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const bookings = await bookingService.getBookings();
      setOrders(bookings);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setLoading(false);
    }
  };

  const serviceBookings = orders.filter(order => order.serviceId);
  const productBookings = orders.filter(order => order.productId);

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
          <PageTitle>My Bookings</PageTitle>
          
          {loading ? (
            <EmptyState>
              <p>Loading your bookings...</p>
            </EmptyState>
          ) : orders.length > 0 ? (
            <>
              {serviceBookings.length > 0 && (
                <>
                  <StyledSectionTitle>Service Bookings</StyledSectionTitle>
                  <OrdersGrid>
                    {serviceBookings.map((order) => (
                      <OrderCard key={order._id}>
                        <OrderHeader>
                          <OrderId>Order #{order._id.slice(-6).toUpperCase()}</OrderId>
                          <OrderDate>{new Date(order.createdAt).toLocaleDateString()}</OrderDate>
                        </OrderHeader>
                        <OrderStatus $status={order.status}>{order.status}</OrderStatus>
                        <OrderContent>
                          <OrderService>{order.serviceId?.title || 'Service'}</OrderService>
                          <OrderDetails>
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
                </>
              )}

              {productBookings.length > 0 && (
                <>
                  <StyledSectionTitle style={{ marginTop: serviceBookings.length > 0 ? '40px' : '0' }}>Product Bookings</StyledSectionTitle>
                  <OrdersGrid>
                    {productBookings.map((order) => (
                      <OrderCard key={order._id}>
                        <OrderHeader>
                          <OrderId>Order #{order._id.slice(-6).toUpperCase()}</OrderId>
                          <OrderDate>{new Date(order.createdAt).toLocaleDateString()}</OrderDate>
                        </OrderHeader>
                        <OrderStatus $status={order.status}>{order.status}</OrderStatus>
                        <OrderContent>
                          {order.productId?.image && (
                            <ProductImage 
                              src={order.productId.image?.startsWith('http') ? order.productId.image : `${process.env.REACT_APP_API_URL}${order.productId.image}`}
                              alt={order.productId?.name}
                              onError={(e) => { e.target.src = '/Images/products-showcase.jpg'; }}
                            />
                          )}
                          <OrderService>{order.productId?.name || 'Product'}</OrderService>
                          <OrderDetails>
                            <DetailRow>
                              <DetailLabel>Quantity:</DetailLabel>
                              <DetailValue>{order.quantity || 1}</DetailValue>
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
                </>
              )}
            </>
          ) : (
            <EmptyState>
              <h3>No Bookings Yet</h3>
              <p>Order products and services to see them here.</p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                <ViewButton onClick={() => navigate('/services')}>Browse Services</ViewButton>
                <ViewButton onClick={() => navigate('/products')}>Browse Products</ViewButton>
              </div>
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
                <ModalTitle>Booking Details - #{selectedOrder._id.slice(-6).toUpperCase()}</ModalTitle>
                <CloseButton onClick={closeModal}>×</CloseButton>
              </ModalHeader>
              <ModalBody>
                <ModalSection>
                  <SectionTitle>{selectedOrder.serviceId ? 'Service' : 'Product'} Information</SectionTitle>
                  <InfoGrid>
                    {selectedOrder.productId?.image && (
                      <ProductImage 
                        src={selectedOrder.productId.image?.startsWith('http') ? selectedOrder.productId.image : `${process.env.REACT_APP_API_URL}${selectedOrder.productId.image}`}
                        alt={selectedOrder.productId?.name}
                        onError={(e) => { e.target.src = '/Images/products-showcase.jpg'; }}
                        style={{ gridColumn: '1 / -1', marginBottom: '15px' }}
                      />
                    )}
                    <DetailRow>
                      <DetailLabel>{selectedOrder.serviceId ? 'Service' : 'Product'}:</DetailLabel>
                      <DetailValue>{selectedOrder.serviceId?.title || selectedOrder.productId?.name || 'Order'}</DetailValue>
                    </DetailRow>
                    {selectedOrder.productId && (
                      <DetailRow>
                        <DetailLabel>Quantity:</DetailLabel>
                        <DetailValue>{selectedOrder.quantity || 1}</DetailValue>
                      </DetailRow>
                    )}
                    <DetailRow>
                      <DetailLabel>Status:</DetailLabel>
                      <OrderStatus $status={selectedOrder.status}>{selectedOrder.status}</OrderStatus>
                    </DetailRow>
                    <DetailRow>
                      <DetailLabel>Booking Date:</DetailLabel>
                      <DetailValue>{new Date(selectedOrder.createdAt).toLocaleDateString()}</DetailValue>
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
                      <DetailLabel>Scheduled Date:</DetailLabel>
                      <DetailValue>{selectedOrder.preferredDate}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                      <DetailLabel>Scheduled Time:</DetailLabel>
                      <DetailValue>{selectedOrder.preferredTime}</DetailValue>
                    </DetailRow>
                  </InfoGrid>
                </ModalSection>

                {selectedOrder.serviceId && (
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
                    </InfoGrid>
                  </ModalSection>
                )}

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
