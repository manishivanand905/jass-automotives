import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { adminService } from '../../services/adminService';

const AddVendorWrapper = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
  padding: 40px 20px;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
`;

const Form = styled.form`
  background: #292929;
  padding: 30px;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #ffffff;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  background: #3a3a3a;
  border: 1px solid #4a4a4a;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #cc0000;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  background: #3a3a3a;
  border: 1px solid #4a4a4a;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #cc0000;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #cc0000;
  color: #ffffff;
  border: none;
  padding: 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;

  &:hover {
    background: #aa0000;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.p`
  color: #ff6b6b;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;

const AddVendor = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setError('');
    setLoading(true);
    
    try {
      await adminService.createVendor(data);
      alert('Vendor added successfully!');
      reset();
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add vendor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <AddVendorWrapper>
        <Container>
          <Title>Add New Vendor</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label>Vendor Name *</Label>
              <Input {...register('name', { required: true })} placeholder="e.g., John Doe" />
            </FormGroup>

            <FormGroup>
              <Label>Email *</Label>
              <Input {...register('email', { required: true })} type="email" placeholder="e.g., vendor@example.com" />
            </FormGroup>

            <FormGroup>
              <Label>Phone *</Label>
              <Input {...register('phone', { required: true })} placeholder="e.g., +91 9876543210" />
            </FormGroup>

            <FormGroup>
              <Label>Store Location *</Label>
              <Select {...register('location', { required: true })}>
                <option value="">Select Location</option>
                <option value="Film Nagar">Film Nagar</option>
                <option value="Hi-Tech City">Hi-Tech City</option>
                <option value="Secunderabad">Secunderabad</option>
                <option value="Kukatpally">Kukatpally</option>
                <option value="Gachibowli">Gachibowli</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Username *</Label>
              <Input {...register('username', { required: true })} placeholder="Login username" />
            </FormGroup>

            <FormGroup>
              <Label>Password *</Label>
              <Input {...register('password', { required: true })} type="password" placeholder="Login password" />
            </FormGroup>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add Vendor'}
            </SubmitButton>
            {error && <ErrorMsg>{error}</ErrorMsg>}
          </Form>
        </Container>
      </AddVendorWrapper>
      <Footer />
    </>
  );
};

export default AddVendor;
