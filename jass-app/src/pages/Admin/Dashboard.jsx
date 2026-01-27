import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PageTransition } from '../../components/AnimatedWrapper';

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
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  margin: 0;
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

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: #3a3a3a;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
`;

const CardTitle = styled.h3`
  color: #aaa;
  font-size: 14px;
  margin: 0 0 15px 0;
  font-weight: 600;
`;

const CardValue = styled.div`
  color: white;
  font-size: 32px;
  font-weight: 700;
`;

const Section = styled.div`
  background-color: #3a3a3a;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 20px;
  margin: 0 0 20px 0;
  padding-bottom: 15px;
  border-bottom: 2px solid #cc0000;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  color: #aaa;
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #4a4a4a;
  font-size: 14px;
`;

const Td = styled.td`
  color: white;
  padding: 12px;
  border-bottom: 1px solid #4a4a4a;
  font-size: 14px;
`;

const StatusBadge = styled.span`
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${props => 
    props.$status === 'Completed' ? '#28a745' :
    props.$status === 'Pending' ? '#ffc107' :
    props.$status === 'In Progress' ? '#17a2b8' : '#6c757d'
  };
  color: white;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #aaa;
  font-size: 16px;
`;

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  // Dummy data
  const stats = {
    totalOrders: 47,
    stores: 3,
    servicesOrdered: 89,
    pending: 12
  };

  const ordersByStore = [
    { store: 'Film Nagar', orders: 18 },
    { store: 'Hi-Tech City', orders: 16 },
    { store: 'Secunderabad', orders: 13 }
  ];

  const servicesBreakdown = [
    { service: 'Ceramic Coating', count: 23 },
    { service: 'PPF Installation', count: 18 },
    { service: 'Car Detailing', count: 15 },
    { service: 'Dent & Paint Repair', count: 12 },
    { service: 'Interior Detailing', count: 10 }
  ];

  const appointments = [
    { id: 1, customer: 'Rajesh Kumar', service: 'Ceramic Coating', store: 'Film Nagar', date: '2024-01-20', time: '10:00 AM', status: 'Pending' },
    { id: 2, customer: 'Priya Sharma', service: 'PPF Installation', store: 'Hi-Tech City', date: '2024-01-20', time: '11:30 AM', status: 'Confirmed' },
    { id: 3, customer: 'Amit Patel', service: 'Car Detailing', store: 'Secunderabad', date: '2024-01-20', time: '02:00 PM', status: 'In Progress' },
    { id: 4, customer: 'Sneha Reddy', service: 'Interior Detailing', store: 'Film Nagar', date: '2024-01-21', time: '09:00 AM', status: 'Pending' },
    { id: 5, customer: 'Vikram Singh', service: 'Dent & Paint Repair', store: 'Hi-Tech City', date: '2024-01-21', time: '03:00 PM', status: 'Completed' },
    { id: 6, customer: 'Ananya Iyer', service: 'Ceramic Coating', store: 'Secunderabad', date: '2024-01-22', time: '10:30 AM', status: 'Confirmed' },
    { id: 7, customer: 'Karthik Rao', service: 'PPF Installation', store: 'Film Nagar', date: '2024-01-22', time: '01:00 PM', status: 'Pending' },
    { id: 8, customer: 'Divya Menon', service: 'Car Detailing', store: 'Hi-Tech City', date: '2024-01-23', time: '11:00 AM', status: 'Confirmed' }
  ];

  return (
    <PageTransition>
      <DashboardWrapper>
        <Header>
          <Title>Admin Dashboard</Title>
          <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
        </Header>
      <Container>
        <Grid>
          <Card>
            <CardTitle>Total Orders</CardTitle>
            <CardValue>{stats.totalOrders}</CardValue>
          </Card>
          <Card>
            <CardTitle>Stores</CardTitle>
            <CardValue>{stats.stores}</CardValue>
          </Card>
          <Card>
            <CardTitle>Services Ordered</CardTitle>
            <CardValue>{stats.servicesOrdered}</CardValue>
          </Card>
          <Card>
            <CardTitle>Pending</CardTitle>
            <CardValue>{stats.pending}</CardValue>
          </Card>
        </Grid>

        <Section>
          <SectionTitle>Orders by Store</SectionTitle>
          <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '20px' }}>Number of appointments per location</p>
          {ordersByStore.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <Th>Store Location</Th>
                  <Th>Number of Orders</Th>
                </tr>
              </thead>
              <tbody>
                {ordersByStore.map((item, index) => (
                  <tr key={index}>
                    <Td>{item.store}</Td>
                    <Td>{item.orders}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <EmptyState>No orders yet</EmptyState>
          )}
        </Section>

        <Section>
          <SectionTitle>Services Breakdown</SectionTitle>
          <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '20px' }}>Popular services ordered</p>
          {servicesBreakdown.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <Th>Service Name</Th>
                  <Th>Orders Count</Th>
                </tr>
              </thead>
              <tbody>
                {servicesBreakdown.map((item, index) => (
                  <tr key={index}>
                    <Td>{item.service}</Td>
                    <Td>{item.count}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <EmptyState>No orders yet</EmptyState>
          )}
        </Section>

        <Section>
          <SectionTitle>All Appointments</SectionTitle>
          <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '20px' }}>Manage and track all service bookings</p>
          {appointments.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <Th>ID</Th>
                  <Th>Customer</Th>
                  <Th>Service</Th>
                  <Th>Store</Th>
                  <Th>Date</Th>
                  <Th>Time</Th>
                  <Th>Status</Th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <Td>#{appointment.id}</Td>
                    <Td>{appointment.customer}</Td>
                    <Td>{appointment.service}</Td>
                    <Td>{appointment.store}</Td>
                    <Td>{appointment.date}</Td>
                    <Td>{appointment.time}</Td>
                    <Td><StatusBadge $status={appointment.status}>{appointment.status}</StatusBadge></Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <EmptyState>No appointments yet</EmptyState>
          )}
        </Section>
      </Container>
      </DashboardWrapper>
    </PageTransition>
  );
};

export default Dashboard;
