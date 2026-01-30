import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { serviceService } from '../../services/serviceService';

const EditServiceWrapper = styled.div`
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

const EditService = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, reset, setValue } = useForm();
  const [keyPoints, setKeyPoints] = useState(['']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchService();
  }, [id]);

  const fetchService = async () => {
    try {
      const service = await serviceService.getServiceById(id);
      setValue('title', service.title);
      setValue('category', service.category);
      setValue('description', service.description);
      setValue('detailedDescription', service.detailedDescription);
      setValue('duration', service.duration);
      setValue('price', service.price);
      setValue('review', service.review);
      setKeyPoints(service.keyPoints || ['']);
      setLoading(false);
    } catch (error) {
      alert('Failed to load service');
      navigate('/vendor/dashboard');
    }
  };

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

  const onSubmit = async (data) => {
    try {
      await serviceService.updateService(id, {
        ...data,
        keyPoints: keyPoints.filter(kp => kp.trim() !== '')
      });
      alert('Service updated successfully!');
      navigate('/vendor/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update service');
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <EditServiceWrapper>
          <Container>
            <Title>Loading...</Title>
          </Container>
        </EditServiceWrapper>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <EditServiceWrapper>
        <Container>
          <Title>Edit Service</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label>Service Title *</Label>
              <Input {...register('title', { required: true })} />
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
              <TextArea {...register('description', { required: true })} />
            </FormGroup>

            <FormGroup>
              <Label>Detailed Description *</Label>
              <TextArea {...register('detailedDescription', { required: true })} />
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
              <Input {...register('duration', { required: true })} />
            </FormGroup>

            <FormGroup>
              <Label>Price *</Label>
              <Input {...register('price', { required: true })} />
            </FormGroup>

            <FormGroup>
              <Label>Customer Review (Optional)</Label>
              <TextArea {...register('review')} />
            </FormGroup>

            <SubmitButton type="submit">Update Service</SubmitButton>
          </Form>
        </Container>
      </EditServiceWrapper>
      <Footer />
    </>
  );
};

export default EditService;
