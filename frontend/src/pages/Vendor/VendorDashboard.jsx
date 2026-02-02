import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PageTransition } from '../../components/AnimatedWrapper';
import { vendorService } from '../../services/vendorService';
import { authService } from '../../services/authService';
import { serviceService } from '../../services/serviceService';

const DashboardWrapper = styled.div`
  min-height: 100vh;
  background-color: #292929;
`;

const Header = styled.div`
  background-color: #3a3a3a;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #cc0000;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Greeting = styled.h2`
  color: white;
  font-size: 28px;
  margin: 0 0 10px 0;
  font-weight: 600;

  span {
    color: #cc0000;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const LogoutBtn = styled.button`
  padding: 10px 20px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b30000;
  }
`;

const ActionsBar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  justify-content: flex-end;
  gap: 15px;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const AddBtn = styled.button`
  padding: 10px 20px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b30000;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Card = styled.div`
  background-color: #3a3a3a;
  padding: 30px;
  border-radius: 12px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CardTitle = styled.h3`
  color: #aaa;
  font-size: 16px;
  margin: 0 0 15px 0;
  font-weight: 600;
`;

const CardValue = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Section = styled.div`
  background-color: #3a3a3a;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 20px;
  margin: 0 0 20px 0;
  padding-bottom: 15px;
  border-bottom: 2px solid #cc0000;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ServicesList = styled.div`
  display: grid;
  gap: 20px;
`;

const ServiceItem = styled.div`
  background-color: #292929;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  gap: 20px;
  align-items: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    border-color: #cc0000;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(204, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ServiceImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`;

const ServiceInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ServiceActions = styled.div`
  display: flex;
  gap: 10px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

const ActionBtn = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &.edit {
    background-color: #4caf50;
    color: white;

    &:hover {
      background-color: #45a049;
      transform: translateY(-2px);
    }
  }

  &.delete {
    background-color: #cc0000;
    color: white;

    &:hover {
      background-color: #b30000;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const ServiceName = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const ServiceCategory = styled.div`
  color: #aaa;
  font-size: 14px;
  margin-bottom: 4px;
`;

const ServicePrice = styled.div`
  color: #cc0000;
  font-size: 20px;
  font-weight: 700;
  margin-top: 8px;
`;

const BookingItem = styled.div`
  background-color: #292929;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: #cc0000;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(204, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const BookingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #4a4a4a;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const BookingStatus = styled.span`
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  background-color: ${props => {
    switch(props.$status) {
      case 'Pending': return '#ff9800';
      case 'Confirmed': return '#4caf50';
      case 'Completed': return '#292929';
      case 'Cancelled': return '#cc0000';
      default: return '#757575';
    }
  }};
  color: white;
`;

const BookingDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  color: #aaa;
  font-size: 14px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BookingDetail = styled.div`
  strong {
    color: white;
    margin-right: 8px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #aaa;
  font-size: 16px;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  padding: 8px 16px;
  background: #292929;
  border: 2px solid #4a4a4a;
  color: white;
  border-radius: 6px;
  font-size: 14px;
  min-width: 200px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #cc0000;
  }

  &::placeholder {
    color: #777;
  }

  @media (max-width: 768px) {
    min-width: 150px;
    font-size: 13px;
  }
`;

const FilterBtn = styled.button`
  padding: 8px 16px;
  border: 2px solid ${props => props.$active ? '#cc0000' : '#4a4a4a'};
  background: ${props => props.$active ? '#cc0000' : 'transparent'};
  color: white;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #cc0000;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const BookingActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #4a4a4a;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const ViewBtn = styled.button`
  padding: 8px 16px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #b30000;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
    flex: 1;
  }
`;

const VendorDashboard = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vendorName, setVendorName] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    setVendorName(userData.name || 'Vendor');
    fetchDashboardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshSession = async () => {
    try {
      const profile = await authService.getProfile();
      localStorage.setItem('userData', JSON.stringify({
        _id: profile._id,
        name: profile.name,
        email: profile.email,
        phone: profile.phone
      }));
      setVendorName(profile.name);
      fetchDashboardData();
    } catch (error) {
      alert('Session refresh failed. Please log out and log back in.');
    }
  };

  const fetchDashboardData = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const vendorId = userData._id;
      
      if (!vendorId) {
        await refreshSession();
        return;
      }
      
      const [allServices, bookingsData] = await Promise.all([
        serviceService.getServices(),
        vendorService.getBookings()
      ]);

      
      const servicesData = allServices.filter(s => {
        const match = s.vendorId && (s.vendorId === vendorId || s.vendorId._id === vendorId || s.vendorId.toString() === vendorId);
        return match;
      });

      setServices(servicesData);
      setBookings(bookingsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    authService.logout();
    navigate('/vendor/login');
  };

  const handleDeleteService = async (serviceId) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await serviceService.deleteService(serviceId);
        alert('Service deleted successfully!');
        fetchDashboardData();
      } catch (error) {
        alert(error.response?.data?.message || 'Failed to delete service');
      }
    }
  };

  const handleUpdateBookingStatus = async (bookingId, status) => {
    try {
      await vendorService.updateBookingStatus(bookingId, status);
      fetchDashboardData();
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to update booking status');
    }
  };

  const filteredBookings = bookings
    .filter(b => statusFilter === 'All' || b.status === statusFilter)
    .filter(b => {
      if (!searchQuery) return true;
      const orderId = b._id.slice(-8).toLowerCase();
      return orderId.includes(searchQuery.toLowerCase());
    });

  if (loading) {
    return (
      <DashboardWrapper>
        <Header>
          <Title>Vendor Dashboard</Title>
          <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
        </Header>
        <Container>
          <EmptyState>Loading...</EmptyState>
        </Container>
      </DashboardWrapper>
    );
  }

  const totalOrders = bookings.length;

  return (
    <PageTransition>
      <DashboardWrapper>
        <Header>
          <Title>Vendor Dashboard</Title>
          <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
        </Header>
        <ActionsBar>
          <AddBtn onClick={() => navigate('/vendor/add-service')}>+ Add Service</AddBtn>
        </ActionsBar>
      <Container>
        <Greeting>Welcome back, <span>{vendorName}</span>!</Greeting>
        <Grid>
          <Card>
            <CardTitle>My Services</CardTitle>
            <CardValue>{services.length}</CardValue>
          </Card>
          <Card>
            <CardTitle>Total Orders</CardTitle>
            <CardValue>{totalOrders}</CardValue>
          </Card>
        </Grid>

        <Section>
          <SectionTitle>My Services</SectionTitle>
          <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '20px' }}>Services you provide</p>
          {services.length > 0 ? (
            <ServicesList>
              {services.map((service) => (
                <ServiceItem key={service._id}>
                  <ServiceImage 
                    src={service.image?.startsWith('http') ? service.image : `${process.env.REACT_APP_API_URL}${service.image}`} 
                    alt={service.title}
                    onError={(e) => { e.target.src = '/Images/repair.jpg'; }}
                  />
                  <ServiceInfo>
                    <ServiceName>{service.title}</ServiceName>
                    <ServiceCategory>{service.category}</ServiceCategory>
                    <ServicePrice>{service.price}</ServicePrice>
                  </ServiceInfo>
                  <ServiceActions>
                    <ActionBtn className="edit" onClick={() => navigate(`/vendor/edit-service/${service._id}`)}>Edit</ActionBtn>
                    <ActionBtn className="delete" onClick={() => handleDeleteService(service._id)}>Delete</ActionBtn>
                  </ServiceActions>
                </ServiceItem>
              ))}
            </ServicesList>
          ) : (
            <EmptyState>No services yet</EmptyState>
          )}
        </Section>

        <Section>
          <SectionTitle>Recent Bookings</SectionTitle>
          <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '20px' }}>Latest service bookings from customers</p>
          <FilterBar>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled'].map(status => (
                <FilterBtn 
                  key={status} 
                  $active={statusFilter === status}
                  onClick={() => setStatusFilter(status)}
                >
                  {status}
                </FilterBtn>
              ))}
            </div>
            <SearchInput 
              type="text"
              placeholder="Search by Order ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </FilterBar>
          {filteredBookings.length > 0 ? (
            <ServicesList>
              {filteredBookings.map((booking) => (
                <BookingItem key={booking._id}>
                  <BookingHeader>
                    <ServiceName>{booking.serviceId?.title || booking.productId?.name || 'Booking'}</ServiceName>
                    <BookingStatus $status={booking.status}>{booking.status}</BookingStatus>
                  </BookingHeader>
                  <BookingDetails>
                    <BookingDetail><strong>Order ID:</strong>#{booking._id.slice(-8)}</BookingDetail>
                    <BookingDetail><strong>Customer:</strong>{booking.customerName}</BookingDetail>
                    <BookingDetail><strong>Phone:</strong>{booking.phone}</BookingDetail>
                    <BookingDetail><strong>Car:</strong>{booking.carMake} {booking.carModel}</BookingDetail>
                    <BookingDetail><strong>Date:</strong>{booking.preferredDate}</BookingDetail>
                    <BookingDetail><strong>Time:</strong>{booking.preferredTime}</BookingDetail>
                    <BookingDetail><strong>Amount:</strong>{booking.amount}</BookingDetail>
                  </BookingDetails>
                  {booking.additionalNotes && (
                    <div style={{ marginTop: '12px', color: '#aaa', fontSize: '13px', fontStyle: 'italic' }}>
                      Note: {booking.additionalNotes}
                    </div>
                  )}
                  <BookingActions>
                    <ViewBtn onClick={() => alert(`Order Details:\n\nOrder ID: #${booking._id.slice(-8)}\nCustomer: ${booking.customerName}\nEmail: ${booking.email}\nPhone: ${booking.phone}\nVehicle: ${booking.carMake} ${booking.carModel}\nDate: ${booking.preferredDate}\nTime: ${booking.preferredTime}\nAmount: ${booking.amount}\nStatus: ${booking.status}${booking.additionalNotes ? '\nNotes: ' + booking.additionalNotes : ''}`)}>View Details</ViewBtn>
                    {booking.status === 'Pending' && (
                      <>
                        <ActionBtn className="edit" onClick={() => handleUpdateBookingStatus(booking._id, 'Confirmed')}>
                          Accept
                        </ActionBtn>
                        <ActionBtn className="delete" onClick={() => handleUpdateBookingStatus(booking._id, 'Cancelled')}>
                          Reject
                        </ActionBtn>
                      </>
                    )}
                    {booking.status === 'Confirmed' && (
                      <ActionBtn className="edit" onClick={() => handleUpdateBookingStatus(booking._id, 'Completed')}>
                        Mark as Completed
                      </ActionBtn>
                    )}
                  </BookingActions>
                </BookingItem>
              ))}
            </ServicesList>
          ) : (
            <EmptyState>No {statusFilter !== 'All' ? statusFilter.toLowerCase() : ''} bookings</EmptyState>
          )}
        </Section>
      </Container>
      </DashboardWrapper>
    </PageTransition>
  );
};

export default VendorDashboard;
