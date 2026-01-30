import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { serviceService } from '../../services/serviceService';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AddServiceWrapper = styled.div`
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

const KeyPointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const KeyPointInput = styled.div`
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

const AddService = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [keyPoints, setKeyPoints] = useState(['']);
  const [imagePreview, setImagePreview] = useState(null);

  const addKeyPoint = () => {
    setKeyPoints([...keyPoints, '']);
  };

  const removeKeyPoint = (index) => {
    setKeyPoints(keyPoints.filter((_, i) => i !== index));
  };

  const updateKeyPoint = (index, value) => {
    const updated = [...keyPoints];
    updated[index] = value;
    setKeyPoints(updated);
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
      if (!data.image || !data.image[0]) {
        alert('Please select an image');
        return;
      }

      const formData = new FormData();
      formData.append('image', data.image[0]);
      formData.append('title', data.title);
      formData.append('category', data.category);
      formData.append('description', data.description);
      formData.append('detailedDescription', data.detailedDescription);
      formData.append('duration', data.duration);
      formData.append('price', data.price);
      formData.append('review', data.review || 'Great service!');
      formData.append('reviewAuthor', 'Customer Review');
      
      keyPoints.filter(kp => kp.trim() !== '').forEach(kp => {
        formData.append('keyPoints[]', kp);
      });

      await serviceService.createService(formData);
      
      alert('Service added successfully!');
      reset();
      setKeyPoints(['']);
      setImagePreview(null);
      navigate('/vendor/dashboard');
    } catch (error) {
      console.error('Error:', error);
      alert(error.response?.data?.message || 'Failed to add service');
    }
  };

  return (
    <>
      <Header />
      <AddServiceWrapper>
        <Container>
          <Title>Add New Service</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label>Service Image *</Label>
              <Input type="file" accept="image/*" {...register('image', { required: true })} onChange={handleImageChange} />
              {imagePreview && (
                <ImagePreview>
                  <img src={imagePreview} alt="Preview" />
                </ImagePreview>
              )}
            </FormGroup>

            <FormGroup>
              <Label>Service Title *</Label>
              <Input {...register('title', { required: true })} placeholder="e.g., Full Vehicle Diagnostics" />
            </FormGroup>

            <FormGroup>
              <Label>Category *</Label>
              <Select {...register('category', { required: true })}>
                <option value="">Select Category</option>
                <option value="Repair">Repair</option>
                <option value="Detailing">Detailing</option>
                <option value="Body Shop">Body Shop</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Short Description *</Label>
              <TextArea {...register('description', { required: true })} placeholder="Brief description of the service" />
            </FormGroup>

            <FormGroup>
              <Label>Detailed Description *</Label>
              <TextArea {...register('detailedDescription', { required: true })} placeholder="Detailed description of the service" />
            </FormGroup>

            <FormGroup>
              <Label>Key Points</Label>
              <KeyPointsContainer>
                {keyPoints.map((point, index) => (
                  <KeyPointInput key={index}>
                    <Input
                      value={point}
                      onChange={(e) => updateKeyPoint(index, e.target.value)}
                      placeholder={`Key point ${index + 1}`}
                    />
                    {keyPoints.length > 1 && (
                      <RemoveButton type="button" onClick={() => removeKeyPoint(index)}>Remove</RemoveButton>
                    )}
                  </KeyPointInput>
                ))}
                <AddButton type="button" onClick={addKeyPoint}>Add Key Point</AddButton>
              </KeyPointsContainer>
            </FormGroup>

            <FormGroup>
              <Label>Duration *</Label>
              <Input {...register('duration', { required: true })} placeholder="e.g., 1 hr" />
            </FormGroup>

            <FormGroup>
              <Label>Price *</Label>
              <Input {...register('price', { required: true })} placeholder="e.g., ₹899" />
            </FormGroup>

            <FormGroup>
              <Label>Customer Review (Optional)</Label>
              <TextArea {...register('review')} placeholder="Sample customer review" />
            </FormGroup>

            <SubmitButton type="submit">Add Service</SubmitButton>
          </Form>
        </Container>
      </AddServiceWrapper>
      <Footer />
    </>
  );
};

export default AddService;
