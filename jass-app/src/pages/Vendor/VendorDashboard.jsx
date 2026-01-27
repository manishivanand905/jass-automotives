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
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
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
  padding: 30px;
  border-radius: 12px;
  text-align: center;
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
    props.$status === 'Processing' ? '#17a2b8' : '#6c757d'
  };
  color: white;
`;

const ServicesList = styled.div`
  display: grid;
  gap: 15px;
`;

const ServiceItem = styled.div`
  background-color: #292929;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ServiceName = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

const ServicePrice = styled.div`
  color: #cc0000;
  font-size: 16px;
  font-weight: 700;
`;

const VendorDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  // Vendor's services
  const vendorServices = [
    { id: 1, name: 'Ceramic Coating', price: '₹25,000', category: 'Detailing' },
    { id: 2, name: 'PPF Installation', price: '₹45,000', category: 'Protection' },
    { id: 3, name: 'Car Detailing', price: '₹8,000', category: 'Detailing' },
    { id: 4, name: 'Interior Detailing', price: '₹5,000', category: 'Detailing' },
    { id: 5, name: 'Paint Correction', price: '₹15,000', category: 'Repair' }
  ];

  const myOrders = [
    { id: 1234, product: 'XPEL PPF', customer: 'Rajesh Kumar', amount: '₹45,000', date: '2024-01-20', status: 'Pending' },
    { id: 1233, product: '3M Ceramic', customer: 'Priya Sharma', amount: '₹25,000', date: '2024-01-19', status: 'Completed' },
    { id: 1232, product: 'LLumar PPF', customer: 'Amit Patel', amount: '₹40,000', date: '2024-01-18', status: 'Processing' },
    { id: 1231, product: 'Ceramic Coating', customer: 'Sneha Reddy', amount: '₹28,000', date: '2024-01-17', status: 'Completed' },
    { id: 1230, product: 'Car Detailing', customer: 'Vikram Singh', amount: '₹8,000', date: '2024-01-16', status: 'Completed' }
  ];

  return (
    <PageTransition>
      <DashboardWrapper>
        <Header>
          <Title>Vendor Dashboard</Title>
          <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
        </Header>
      <Container>
        <Grid>
          <Card>
            <CardTitle>My Orders</CardTitle>
            <CardValue>42</CardValue>
          </Card>
          <Card>
            <CardTitle>Pending Orders</CardTitle>
            <CardValue>8</CardValue>
          </Card>
          <Card>
            <CardTitle>Revenue</CardTitle>
            <CardValue>₹2.5L</CardValue>
          </Card>
        </Grid>

        <Section>
          <SectionTitle>My Services</SectionTitle>
          <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '20px' }}>Services you provide</p>
          <ServicesList>
            {vendorServices.map((service) => (
              <ServiceItem key={service.id}>
                <div>
                  <ServiceName>{service.name}</ServiceName>
                  <div style={{ color: '#aaa', fontSize: '13px', marginTop: '5px' }}>{service.category}</div>
                </div>
                <ServicePrice>{service.price}</ServicePrice>
              </ServiceItem>
            ))}
          </ServicesList>
        </Section>

        <Section>
          <SectionTitle>Recent Orders</SectionTitle>
          <Table>
            <thead>
              <tr>
                <Th>Order ID</Th>
                <Th>Product</Th>
                <Th>Customer</Th>
                <Th>Amount</Th>
                <Th>Date</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((order) => (
                <tr key={order.id}>
                  <Td>#{order.id}</Td>
                  <Td>{order.product}</Td>
                  <Td>{order.customer}</Td>
                  <Td>{order.amount}</Td>
                  <Td>{order.date}</Td>
                  <Td><StatusBadge $status={order.status}>{order.status}</StatusBadge></Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Section>
      </Container>
      </DashboardWrapper>
    </PageTransition>
  );
};

export default VendorDashboard;
