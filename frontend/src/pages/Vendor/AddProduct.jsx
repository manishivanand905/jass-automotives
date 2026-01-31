import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { productService } from '../../services/productService';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AddProductWrapper = styled.div`
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

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FeatureInput = styled.div`
  display: flex;
  gap: 10px;
`;

const AddButton = styled.button`
  background: #cc0000;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background: #aa0000;
  }
`;

const RemoveButton = styled.button`
  background: #666;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #555;
  }
`;

const ImagePreview = styled.div`
  margin-top: 10px;
  img {
    max-width: 200px;
    max-height: 200px;
    border-radius: 8px;
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

const AddProduct = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [features, setFeatures] = useState(['']);
  const [imagePreview, setImagePreview] = useState(null);

  const addFeature = () => {
    setFeatures([...features, '']);
  };

  const removeFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const updateFeature = (index, value) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      
      if (data.image && data.image[0]) {
        formData.append('image', data.image[0]);
      }
      
      formData.append('name', data.name);
      formData.append('brand', data.brand);
      formData.append('category', data.category);
      formData.append('description', data.description);
      formData.append('detailedDescription', data.detailedDescription);
      formData.append('price', data.price);
      
      features.filter(f => f.trim() !== '').forEach(f => {
        formData.append('features[]', f);
      });
      
      formData.append('specifications', JSON.stringify({
        hardness: data.hardness || '9H',
        warranty: data.warranty || '5 years',
        layers: data.layers || '2 layers',
        thickness: data.thickness || '2 microns',
      }));

      await productService.createProduct(formData);
      
      alert('Product added successfully!');
      reset();
      setFeatures(['']);
      setImagePreview(null);
      navigate('/vendor/dashboard');
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to add product');
    }
  };

  return (
    <>
      <Header />
      <AddProductWrapper>
        <Container>
          <Title>Add New Product</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label>Product Image</Label>
              <Input type="file" accept="image/*" {...register('image')} onChange={handleImageChange} />
              {imagePreview && (
                <ImagePreview>
                  <img src={imagePreview} alt="Preview" />
                </ImagePreview>
              )}
            </FormGroup>

            <FormGroup>
              <Label>Product Name *</Label>
              <Input {...register('name', { required: true })} placeholder="e.g., 3M Ceramic Coating" />
            </FormGroup>

            <FormGroup>
              <Label>Brand *</Label>
              <Input {...register('brand', { required: true })} placeholder="e.g., 3M" />
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
              <Label>Description *</Label>
              <TextArea {...register('description', { required: true })} placeholder="Brief description of the product" />
            </FormGroup>

            <FormGroup>
              <Label>Detailed Description *</Label>
              <TextArea {...register('detailedDescription', { required: true })} placeholder="Detailed description of the product" />
            </FormGroup>

            <FormGroup>
              <Label>Features</Label>
              <FeaturesContainer>
                {features.map((feature, index) => (
                  <FeatureInput key={index}>
                    <Input
                      value={feature}
                      onChange={(e) => updateFeature(index, e.target.value)}
                      placeholder={`Feature ${index + 1}`}
                    />
                    {features.length > 1 && (
                      <RemoveButton type="button" onClick={() => removeFeature(index)}>Remove</RemoveButton>
                    )}
                  </FeatureInput>
                ))}
                <AddButton type="button" onClick={addFeature}>Add Feature</AddButton>
              </FeaturesContainer>
            </FormGroup>

            <FormGroup>
              <Label>Price *</Label>
              <Input {...register('price', { required: true })} placeholder="e.g., ₹25,000" />
            </FormGroup>

            <FormGroup>
              <Label>Hardness</Label>
              <Input {...register('hardness')} placeholder="e.g., 9H" />
            </FormGroup>

            <FormGroup>
              <Label>Warranty</Label>
              <Input {...register('warranty')} placeholder="e.g., 5 years" />
            </FormGroup>

            <FormGroup>
              <Label>Layers</Label>
              <Input {...register('layers')} placeholder="e.g., 2 layers" />
            </FormGroup>

            <FormGroup>
              <Label>Thickness</Label>
              <Input {...register('thickness')} placeholder="e.g., 2 microns" />
            </FormGroup>

            <SubmitButton type="submit">Add Product</SubmitButton>
          </Form>
        </Container>
      </AddProductWrapper>
      <Footer />
    </>
  );
};

export default AddProduct;
