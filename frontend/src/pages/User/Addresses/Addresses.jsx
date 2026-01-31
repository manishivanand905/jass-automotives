import React, { useState } from 'react';
import { PageTransition } from '../../../components/AnimatedWrapper';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import {
  AddressesWrapper,
  Container,
  PageTitle,
  AddButton,
  AddressesGrid,
  AddressCard,
  AddressType,
  AddressDetails,
  AddressName,
  AddressText,
  AddressActions,
  ActionButton,
  EmptyState,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  Select,
  ButtonGroup,
  SubmitButton,
  CancelButton
} from './Addresses.styles';

const Addresses = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home',
      name: 'Mani Shivanand',
      phone: '+917416161249',
      address: 'Plot No. 123, Road No. 45, Jubilee Hills',
      city: 'Hyderabad',
      state: 'Telangana',
      pincode: '500033',
      isDefault: true
    },
    {
      id: 2,
      type: 'Office',
      name: 'Mani Shivanand',
      phone: '+917416161249',
      address: 'Tech Park, Building 5, Floor 3, HITEC City',
      city: 'Hyderabad',
      state: 'Telangana',
      pincode: '500081',
      isDefault: false
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [formData, setFormData] = useState({
    type: 'Home',
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleAddNew = () => {
    setEditingAddress(null);
    setFormData({
      type: 'Home',
      name: 'Mani Shivanand',
      phone: '+917416161249',
      address: '',
      city: '',
      state: '',
      pincode: ''
    });
    setShowModal(true);
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    setFormData({
      type: address.type,
      name: address.name,
      phone: address.phone,
      address: address.address,
      city: address.city,
      state: address.state,
      pincode: address.pincode
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      setAddresses(addresses.filter(addr => addr.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingAddress) {
      setAddresses(addresses.map(addr => 
        addr.id === editingAddress.id 
          ? { ...addr, ...formData }
          : addr
      ));
    } else {
      const newAddress = {
        id: Date.now(),
        ...formData,
        isDefault: addresses.length === 0
      };
      setAddresses([...addresses, newAddress]);
    }
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  return (
    <PageTransition>
      <Header />
      <AddressesWrapper>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <PageTitle>My Addresses</PageTitle>
            <AddButton onClick={handleAddNew}>+ Add New Address</AddButton>
          </div>

          {addresses.length > 0 ? (
            <AddressesGrid>
              {addresses.map((address) => (
                <AddressCard key={address.id} $isDefault={address.isDefault}>
                  <AddressType>{address.type} {address.isDefault && <span style={{ color: '#cc0000', fontSize: '12px' }}>(Default)</span>}</AddressType>
                  <AddressDetails>
                    <AddressName>{address.name}</AddressName>
                    <AddressText>{address.phone}</AddressText>
                    <AddressText>{address.address}</AddressText>
                    <AddressText>{address.city}, {address.state} - {address.pincode}</AddressText>
                  </AddressDetails>
                  <AddressActions>
                    {!address.isDefault && (
                      <ActionButton onClick={() => handleSetDefault(address.id)}>Set as Default</ActionButton>
                    )}
                    <ActionButton onClick={() => handleEdit(address)}>Edit</ActionButton>
                    <ActionButton $danger onClick={() => handleDelete(address.id)}>Delete</ActionButton>
                  </AddressActions>
                </AddressCard>
              ))}
            </AddressesGrid>
          ) : (
            <EmptyState>
              <h3>No Addresses Added</h3>
              <p>Add your pickup address for car services</p>
              <AddButton onClick={handleAddNew}>+ Add New Address</AddButton>
            </EmptyState>
          )}
        </Container>
      </AddressesWrapper>

      {showModal && (
        <>
          <ModalOverlay onClick={() => setShowModal(false)} />
          <Modal>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>{editingAddress ? 'Edit Address' : 'Add New Address'}</ModalTitle>
                <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
              </ModalHeader>
              <ModalBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label>Address Type *</Label>
                    <Select name="type" value={formData.type} onChange={handleChange} required>
                      <option value="Home">Home</option>
                      <option value="Office">Office</option>
                      <option value="Other">Other</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label>Full Name *</Label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Address *</Label>
                    <TextArea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                      placeholder="House No., Building Name, Street"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>City *</Label>
                    <Input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>State *</Label>
                    <Input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Pincode *</Label>
                    <Input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      maxLength="6"
                      required
                    />
                  </FormGroup>

                  <ButtonGroup>
                    <CancelButton type="button" onClick={() => setShowModal(false)}>Cancel</CancelButton>
                    <SubmitButton type="submit">{editingAddress ? 'Update Address' : 'Add Address'}</SubmitButton>
                  </ButtonGroup>
                </Form>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}

      <Footer />
    </PageTransition>
  );
};

export default Addresses;
