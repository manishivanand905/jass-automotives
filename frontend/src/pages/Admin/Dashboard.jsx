import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PageTransition } from '../../components/AnimatedWrapper';
import { adminService } from '../../services/adminService';
import { authService } from '../../services/authService';
import { productService } from '../../services/productService';

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

const ActionsBar = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

const AddVendorBtn = styled.button`
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

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
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
    props.$status === 'Completed' || props.$status === 'active' ? '#28a745' :
    props.$status === 'Pending' ? '#ffc107' :
    props.$status === 'In Progress' ? '#17a2b8' :
    props.$status === 'inactive' ? '#6c757d' : '#6c757d'
  };
  color: white;
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  background-color: ${props => props.$delete ? '#dc3545' : props.$edit ? '#ffc107' : '#17a2b8'};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.$delete ? '#c82333' : props.$edit ? '#e0a800' : '#138496'};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #aaa;
  font-size: 16px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: #3a3a3a;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 30px;
  position: relative;
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #cc0000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #b30000;
  }
`;

const ModalTitle = styled.h2`
  color: white;
  margin: 0 0 20px 0;
  padding-bottom: 15px;
  border-bottom: 2px solid #cc0000;
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const DetailRow = styled.div`
  margin-bottom: 15px;
  color: white;
`;

const DetailLabel = styled.span`
  color: #aaa;
  font-weight: 600;
  display: inline-block;
  min-width: 150px;
`;

const DetailValue = styled.span`
  color: white;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
`;

const FeatureItem = styled.li`
  color: white;
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
  
  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #cc0000;
    font-weight: bold;
  }
`;

const AddonBox = styled.div`
  background: #292929;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const AddonTitle = styled.h4`
  color: white;
  margin: 0 0 5px 0;
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const [vendors, setVendors] = useState([]);
  const [products, setProducts] = useState([]);
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalVendors: 0,
    totalServices: 0,
    pendingOrders: 0,
    totalRevenue: 0,
    productOrders: 0,
    serviceOrders: 0,
    vendorOrders: []
  });
  const [loading, setLoading] = useState(true);
  const [viewProduct, setViewProduct] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statsData, vendorsData, productsData] = await Promise.all([
        adminService.getDashboardStats(),
        adminService.getAllVendors(),
        productService.getProducts()
      ]);

      console.log('Stats data:', statsData);
      console.log('Vendors data:', vendorsData);
      console.log('Products data:', productsData);

      setStats(statsData);
      setVendors(vendorsData);
      setProducts(productsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      alert('Failed to load dashboard data: ' + (error.response?.data?.message || error.message));
      setLoading(false);
    }
  };

  const handleDeleteVendor = async (vendorId) => {
    if (window.confirm('Are you sure you want to delete this vendor?')) {
      try {
        await adminService.deleteVendor(vendorId);
        setVendors(vendors.filter(v => v._id !== vendorId));
      } catch (error) {
        alert(error.response?.data?.message || 'Failed to delete vendor');
      }
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await adminService.deleteProduct(productId);
        setProducts(products.filter(p => p._id !== productId));
        alert('Product deleted successfully!');
      } catch (error) {
        alert(error.response?.data?.message || 'Failed to delete product');
      }
    }
  };

  const handleToggleStatus = async (vendorId, currentStatus) => {
    try {
      const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
      await adminService.updateVendorStatus(vendorId, newStatus);
      setVendors(vendors.map(v => 
        v._id === vendorId ? { ...v, status: newStatus } : v
      ));
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to update vendor status');
    }
  };

  const handleLogout = () => {
    authService.logout();
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <DashboardWrapper>
        <Header>
          <Title>Admin Dashboard</Title>
          <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
        </Header>
        <Container>
          <EmptyState>Loading...</EmptyState>
        </Container>
      </DashboardWrapper>
    );
  }

  return (
    <PageTransition>
      <DashboardWrapper>
        <Header>
          <Title>Admin Dashboard</Title>
          <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
        </Header>
        <ActionsBar>
          <AddVendorBtn onClick={() => navigate('/admin/add-vendor')}>+ Add Vendor</AddVendorBtn>
          <AddVendorBtn onClick={() => navigate('/admin/add-product')}>+ Add Product</AddVendorBtn>
        </ActionsBar>
      <Container>
        <Grid>
          <Card>
            <CardTitle>Total Orders</CardTitle>
            <CardValue>{stats.totalOrders || 0}</CardValue>
          </Card>
          <Card>
            <CardTitle>Product Orders</CardTitle>
            <CardValue>{stats.productOrders || 0}</CardValue>
          </Card>
          <Card>
            <CardTitle>Service Orders</CardTitle>
            <CardValue>{stats.serviceOrders || 0}</CardValue>
          </Card>
          <Card>
            <CardTitle>Total Vendors</CardTitle>
            <CardValue>{stats.totalVendors || 0}</CardValue>
          </Card>
          <Card>
            <CardTitle>Total Services</CardTitle>
            <CardValue>{stats.totalServices || 0}</CardValue>
          </Card>
          <Card>
            <CardTitle>Pending Orders</CardTitle>
            <CardValue>{stats.pendingOrders || 0}</CardValue>
          </Card>
          <Card>
            <CardTitle>Total Revenue</CardTitle>
            <CardValue>₹{stats.totalRevenue?.toFixed(2) || '0.00'}</CardValue>
          </Card>
        </Grid>

        <Section>
          <SectionTitle>Manage Vendors</SectionTitle>
          <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '20px' }}>All registered vendors</p>
          {vendors.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Store Location</Th>
                  <Th>Total Orders</Th>
                  <Th>Status</Th>
                  <Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {vendors.map((vendor) => {
                  const vendorOrderData = stats.vendorOrders?.find(vo => vo._id?.toString() === vendor._id?.toString());
                  return (
                    <tr key={vendor._id}>
                      <Td>#{vendor._id.slice(-6)}</Td>
                      <Td>{vendor.name}</Td>
                      <Td>{vendor.email}</Td>
                      <Td>{vendor.phone}</Td>
                      <Td>{vendor.location}</Td>
                      <Td>{vendorOrderData?.orderCount || 0}</Td>
                      <Td><StatusBadge $status={vendor.status}>{vendor.status}</StatusBadge></Td>
                      <Td>
                        <ActionButton $edit onClick={() => navigate(`/admin/edit-vendor/${vendor._id}`)}>Edit</ActionButton>
                        <ActionButton onClick={() => handleToggleStatus(vendor._id, vendor.status)}>
                          {vendor.status === 'active' ? 'Deactivate' : 'Activate'}
                        </ActionButton>
                        <ActionButton $delete onClick={() => handleDeleteVendor(vendor._id)}>Delete</ActionButton>
                      </Td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <EmptyState>No vendors yet</EmptyState>
          )}
        </Section>

        <Section>
          <SectionTitle>Manage Products</SectionTitle>
          <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '20px' }}>All products in the system</p>
          {products.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <Th>Image</Th>
                  <Th>Name</Th>
                  <Th>Brand</Th>
                  <Th>Category</Th>
                  <Th>Price</Th>
                  <Th>Application</Th>
                  <Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <Td>
                      <img 
                        src={product.image?.startsWith('http') ? product.image : `${process.env.REACT_APP_API_URL}${product.image}`}
                        alt={product.name}
                        style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px' }}
                        onError={(e) => { e.target.src = '/Images/products-showcase.jpg'; }}
                      />
                    </Td>
                    <Td>{product.name}</Td>
                    <Td>{product.brand}</Td>
                    <Td>{product.category}</Td>
                    <Td>{product.price}</Td>
                    <Td>{product.applicationType || 'At Store'}</Td>
                    <Td>
                      <ActionButton onClick={() => setViewProduct(product)}>View</ActionButton>
                      <ActionButton $edit onClick={() => navigate(`/admin/edit-product/${product._id}`)}>Edit</ActionButton>
                      <ActionButton $delete onClick={() => handleDeleteProduct(product._id)}>Delete</ActionButton>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <EmptyState>No products yet</EmptyState>
          )}
        </Section>
      </Container>
      </DashboardWrapper>

      {viewProduct && (
        <Modal onClick={() => setViewProduct(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setViewProduct(null)}>×</CloseButton>
            <ModalTitle>{viewProduct.name}</ModalTitle>
            
            <ProductImage 
              src={viewProduct.image?.startsWith('http') ? viewProduct.image : `${process.env.REACT_APP_API_URL}${viewProduct.image}`}
              alt={viewProduct.name}
              onError={(e) => { e.target.src = '/Images/products-showcase.jpg'; }}
            />
            
            <DetailRow>
              <DetailLabel>Brand:</DetailLabel>
              <DetailValue>{viewProduct.brand}</DetailValue>
            </DetailRow>
            
            <DetailRow>
              <DetailLabel>Category:</DetailLabel>
              <DetailValue>{viewProduct.category}</DetailValue>
            </DetailRow>
            
            <DetailRow>
              <DetailLabel>Price:</DetailLabel>
              <DetailValue>{viewProduct.price}</DetailValue>
            </DetailRow>
            
            <DetailRow>
              <DetailLabel>Application Type:</DetailLabel>
              <DetailValue>{viewProduct.applicationType || 'At Store'}</DetailValue>
            </DetailRow>
            
            {viewProduct.vendorLocation && (
              <DetailRow>
                <DetailLabel>Vendor Location:</DetailLabel>
                <DetailValue>{viewProduct.vendorLocation}</DetailValue>
              </DetailRow>
            )}
            
            <DetailRow>
              <DetailLabel>Description:</DetailLabel>
              <DetailValue>{viewProduct.description}</DetailValue>
            </DetailRow>
            
            <DetailRow>
              <DetailLabel>Detailed Description:</DetailLabel>
              <DetailValue>{viewProduct.detailedDescription}</DetailValue>
            </DetailRow>
            
            {viewProduct.features && viewProduct.features.length > 0 && (
              <DetailRow>
                <DetailLabel>Features:</DetailLabel>
                <FeatureList>
                  {viewProduct.features.map((feature, idx) => (
                    <FeatureItem key={idx}>{feature}</FeatureItem>
                  ))}
                </FeatureList>
              </DetailRow>
            )}
            
            {viewProduct.specifications && (
              <DetailRow>
                <DetailLabel>Specifications:</DetailLabel>
                <div style={{ marginLeft: '150px' }}>
                  {Object.entries(viewProduct.specifications).map(([key, value]) => (
                    <div key={key} style={{ marginBottom: '5px' }}>
                      <span style={{ color: '#aaa' }}>{key}:</span> {value}
                    </div>
                  ))}
                </div>
              </DetailRow>
            )}
            
            {viewProduct.addons && viewProduct.addons.length > 0 && (
              <DetailRow>
                <DetailLabel>Add-ons:</DetailLabel>
                <div style={{ marginTop: '10px' }}>
                  {viewProduct.addons.map((addon, idx) => (
                    <AddonBox key={idx}>
                      <AddonTitle>{addon.title} - {addon.price}</AddonTitle>
                      <p style={{ color: '#aaa', margin: '5px 0', fontSize: '14px' }}>{addon.description}</p>
                      {addon.included && addon.included.length > 0 && (
                        <FeatureList>
                          {addon.included.map((item, i) => (
                            <FeatureItem key={i} style={{ fontSize: '13px' }}>{item}</FeatureItem>
                          ))}
                        </FeatureList>
                      )}
                    </AddonBox>
                  ))}
                </div>
              </DetailRow>
            )}
          </ModalContent>
        </Modal>
      )}
    </PageTransition>
  );
};

export default Dashboard;
