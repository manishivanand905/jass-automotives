import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { adminService } from '../../services/adminService';

const EditProductWrapper = styled.div`
  min-height: 100vh;
  background-color: #292929;
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

const BackButton = styled.button`
  background: #666;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 20px;

  &:hover {
    background: #555;
  }
`;

const Form = styled.form`
  background: #3a3a3a;
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
  background: #292929;
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
  background: #292929;
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
  background: #292929;
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

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const [features, setFeatures] = useState(['']);
  const [addons, setAddons] = useState([{ id: '', title: '', description: '', price: '', included: [''] }]);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applicationType, setApplicationType] = useState('At Store');
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetchVendors();
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchVendors = async () => {
    try {
      const vendorsData = await adminService.getAllVendors();
      setVendors(vendorsData);
    } catch (error) {
      console.error('Failed to fetch vendors:', error);
    }
  };

  const fetchProduct = async () => {
    try {
      const product = await adminService.getProductById(id);
      setValue('name', product.name);
      setValue('brand', product.brand);
      setValue('category', product.category);
      setValue('description', product.description);
      setValue('detailedDescription', product.detailedDescription);
      setValue('price', product.price);
      setValue('hardness', product.specifications?.hardness || '');
      setValue('warranty', product.specifications?.warranty || '');
      setValue('layers', product.specifications?.layers || '');
      setValue('thickness', product.specifications?.thickness || '');
      
      if (product.applicationType) {
        setApplicationType(product.applicationType);
      }
      
      if (product.vendorLocation) {
        setValue('vendorLocation', product.vendorLocation);
      }
      
      if (product.features && product.features.length > 0) {
        setFeatures(product.features);
      }
      
      if (product.addons && product.addons.length > 0) {
        setAddons(product.addons);
      }
      
      if (product.image) {
        setImagePreview(product.image.startsWith('http') ? product.image : `http://localhost:5000${product.image}`);
      }
      
      setLoading(false);
    } catch (error) {
      alert('Failed to load product');
      navigate('/admin/dashboard');
    }
  };

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

  const addAddon = () => {
    setAddons([...addons, { id: '', title: '', description: '', price: '', included: [''] }]);
  };

  const removeAddon = (index) => {
    setAddons(addons.filter((_, i) => i !== index));
  };

  const updateAddon = (index, field, value) => {
    const updated = [...addons];
    updated[index][field] = value;
    setAddons(updated);
  };

  const addAddonIncluded = (addonIndex) => {
    const updated = [...addons];
    updated[addonIndex].included.push('');
    setAddons(updated);
  };

  const removeAddonIncluded = (addonIndex, includedIndex) => {
    const updated = [...addons];
    updated[addonIndex].included = updated[addonIndex].included.filter((_, i) => i !== includedIndex);
    setAddons(updated);
  };

  const updateAddonIncluded = (addonIndex, includedIndex, value) => {
    const updated = [...addons];
    updated[addonIndex].included[includedIndex] = value;
    setAddons(updated);
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
      formData.append('applicationType', applicationType);
      
      if (applicationType === 'At Store' && data.vendorLocation) {
        formData.append('vendorLocation', data.vendorLocation);
      }
      
      features.filter(f => f.trim() !== '').forEach(f => {
        formData.append('features[]', f);
      });
      
      formData.append('specifications', JSON.stringify({
        hardness: data.hardness || '9H',
        warranty: data.warranty || '5 years',
        layers: data.layers || '2 layers',
        thickness: data.thickness || '2 microns',
      }));

      const validAddons = addons.filter(a => a.title.trim() !== '');
      if (validAddons.length > 0) {
        formData.append('addons', JSON.stringify(validAddons));
      }

      await adminService.updateProduct(id, formData);
      
      alert('Product updated successfully!');
      navigate('/admin/dashboard');
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to update product');
    }
  };

  if (loading) {
    return (
      <EditProductWrapper>
        <Container>
          <Title>Loading...</Title>
        </Container>
      </EditProductWrapper>
    );
  }

  return (
    <EditProductWrapper>
      <Container>
        <BackButton onClick={() => navigate('/admin/dashboard')}>← Back to Dashboard</BackButton>
        <Title>Edit Product</Title>
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

          <FormGroup>
            <Label>Application Type *</Label>
            <Select value={applicationType} onChange={(e) => setApplicationType(e.target.value)}>
              <option value="At Store">Application at Store</option>
              <option value="Outside by Customer">Application Outside by Customer</option>
            </Select>
          </FormGroup>

          {applicationType === 'At Store' && (
            <FormGroup>
              <Label>Vendor Location *</Label>
              <Select {...register('vendorLocation', { required: applicationType === 'At Store' })}>
                <option value="">Select Vendor Location</option>
                {vendors.map((vendor) => (
                  <option key={vendor._id} value={vendor.location}>
                    {vendor.name} - {vendor.location}
                  </option>
                ))}
              </Select>
            </FormGroup>
          )}

          <FormGroup>
            <Label>Add-ons</Label>
            {addons.map((addon, addonIndex) => (
              <div key={addonIndex} style={{ background: '#292929', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
                <Input
                  value={addon.title}
                  onChange={(e) => updateAddon(addonIndex, 'title', e.target.value)}
                  placeholder="Add-on Title"
                  style={{ marginBottom: '10px' }}
                />
                <TextArea
                  value={addon.description}
                  onChange={(e) => updateAddon(addonIndex, 'description', e.target.value)}
                  placeholder="Add-on Description"
                  style={{ marginBottom: '10px', minHeight: '60px' }}
                />
                <Input
                  value={addon.price}
                  onChange={(e) => updateAddon(addonIndex, 'price', e.target.value)}
                  placeholder="Add-on Price (e.g., ₹5,000)"
                  style={{ marginBottom: '10px' }}
                />
                <Label style={{ fontSize: '12px', marginBottom: '5px' }}>Included Items:</Label>
                {addon.included.map((item, itemIndex) => (
                  <FeatureInput key={itemIndex} style={{ marginBottom: '5px' }}>
                    <Input
                      value={item}
                      onChange={(e) => updateAddonIncluded(addonIndex, itemIndex, e.target.value)}
                      placeholder={`Included item ${itemIndex + 1}`}
                    />
                    {addon.included.length > 1 && (
                      <RemoveButton type="button" onClick={() => removeAddonIncluded(addonIndex, itemIndex)}>Remove</RemoveButton>
                    )}
                  </FeatureInput>
                ))}
                <AddButton type="button" onClick={() => addAddonIncluded(addonIndex)} style={{ marginBottom: '10px', fontSize: '12px', padding: '6px 12px' }}>Add Included Item</AddButton>
                {addons.length > 1 && (
                  <RemoveButton type="button" onClick={() => removeAddon(addonIndex)}>Remove Add-on</RemoveButton>
                )}
              </div>
            ))}
            <AddButton type="button" onClick={addAddon}>Add New Add-on</AddButton>
          </FormGroup>

          <SubmitButton type="submit">Update Product</SubmitButton>
        </Form>
      </Container>
    </EditProductWrapper>
  );
};

export default EditProduct;
