import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { productService } from '../../services/productService';

const EditProductWrapper = styled.div`
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  background: #3a3a3a;
  border: 1px solid #4a4a4a;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;

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
`;

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const [loading, setLoading] = useState(true);

  const fetchProduct = useCallback(async () => {
    try {
      const product = await productService.getProductById(id);
      setValue('name', product.name);
      setValue('brand', product.brand);
      setValue('category', product.category);
      setValue('description', product.description);
      setValue('detailedDescription', product.detailedDescription);
      setValue('price', product.price);
      setLoading(false);
    } catch (error) {
      alert('Failed to load product');
      navigate('/vendor/dashboard');
    }
  }, [id, setValue, navigate]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const onSubmit = async (data) => {
    try {
      await productService.updateProduct(id, data);
      alert('Product updated successfully!');
      navigate('/vendor/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update product');
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <EditProductWrapper>
          <Container>
            <Title>Loading...</Title>
          </Container>
        </EditProductWrapper>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <EditProductWrapper>
        <Container>
          <Title>Edit Product</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label>Product Name *</Label>
              <Input {...register('name', { required: true })} />
            </FormGroup>

            <FormGroup>
              <Label>Brand *</Label>
              <Input {...register('brand', { required: true })} />
            </FormGroup>

            <FormGroup>
              <Label>Category *</Label>
              <Select {...register('category', { required: true })}>
                <option value="">Select Category</option>
                <option value="PPF">PPF</option>
                <option value="Ceramic Coating">Ceramic Coating</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Short Description *</Label>
              <TextArea {...register('description', { required: true })} />
            </FormGroup>

            <FormGroup>
              <Label>Detailed Description *</Label>
              <TextArea {...register('detailedDescription', { required: true })} />
            </FormGroup>

            <FormGroup>
              <Label>Price *</Label>
              <Input {...register('price', { required: true })} />
            </FormGroup>

            <SubmitButton type="submit">Update Product</SubmitButton>
          </Form>
        </Container>
      </EditProductWrapper>
      <Footer />
    </>
  );
};

export default EditProduct;
