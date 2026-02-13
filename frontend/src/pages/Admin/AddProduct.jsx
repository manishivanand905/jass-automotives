import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { adminService } from '../../services/adminService';

const AddProductWrapper = styled.div`
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

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
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

const SpecOptionRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SmallInput = styled(Input)`
  flex: 1;
  min-width: 120px;
  
  @media (max-width: 768px) {
    min-width: 100px;
  }
`;

const AddProduct = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();
  const [features, setFeatures] = useState(['']);
  const [addons, setAddons] = useState([{ id: '', title: '', description: '', price: '', included: [''] }]);
  const [imagePreview, setImagePreview] = useState(null);
  const [specOptions, setSpecOptions] = useState({});
  const [defaultSpecIndex, setDefaultSpecIndex] = useState({});
  const category = watch('category');

  useEffect(() => {
    if (category === 'PPF') {
      setSpecOptions({
        thickness: [{ value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }],
        warranty: [{ value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }],
        finish: [{ value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }],
        coverage: [{ value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }]
      });
      setDefaultSpecIndex({ thickness: 1, warranty: 1, finish: 1, coverage: 1 });
    } else if (category === 'Ceramic Coating') {
      setSpecOptions({
        hardness: [{ value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }],
        warranty: [{ value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }],
        layers: [{ value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }],
        thickness: [{ value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }, { value: '', priceModifier: 0 }]
      });
      setDefaultSpecIndex({ hardness: 1, warranty: 1, layers: 1, thickness: 1 });
    } else {
      setSpecOptions({});
      setDefaultSpecIndex({});
    }
  }, [category]);

  const updateSpecOption = (specKey, index, field, value) => {
    setSpecOptions(prev => ({
      ...prev,
      [specKey]: prev[specKey].map((opt, i) => i === index ? { ...opt, [field]: value } : opt)
    }));
  };

  const setDefaultSpec = (specKey, index) => {
    setDefaultSpecIndex(prev => ({ ...prev, [specKey]: index }));
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
      
      features.filter(f => f.trim() !== '').forEach(f => {
        formData.append('features[]', f);
      });
      
      formData.append('specifications', JSON.stringify(
        category === 'PPF' ? {
          thickness: specOptions.thickness?.[defaultSpecIndex.thickness]?.value || '',
          warranty: specOptions.warranty?.[defaultSpecIndex.warranty]?.value || '',
          finish: specOptions.finish?.[defaultSpecIndex.finish]?.value || '',
          coverage: specOptions.coverage?.[defaultSpecIndex.coverage]?.value || ''
        } : {
          hardness: specOptions.hardness?.[defaultSpecIndex.hardness]?.value || '',
          warranty: specOptions.warranty?.[defaultSpecIndex.warranty]?.value || '',
          layers: specOptions.layers?.[defaultSpecIndex.layers]?.value || '',
          thickness: specOptions.thickness?.[defaultSpecIndex.thickness]?.value || ''
        }
      ));

      if (Object.keys(specOptions).length > 0) {
        formData.append('specOptions', JSON.stringify(specOptions));
      }

      const validAddons = addons.filter(a => a.title.trim() !== '').map(addon => ({
        title: addon.title,
        description: addon.description,
        price: addon.price,
        included: addon.included.filter(item => item.trim() !== '')
      }));
      if (validAddons.length > 0) {
        formData.append('addons', JSON.stringify(validAddons));
      }

      await adminService.createProduct(formData);
      
      alert('Product added successfully!');
      navigate('/admin/dashboard');
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to add product');
    }
  };

  return (
    <AddProductWrapper>
      <Container>
        <BackButton onClick={() => navigate('/admin/dashboard')}>← Back to Dashboard</BackButton>
        <Title>Add New Product</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label>Product Image *</Label>
            <Input type="file" accept="image/*" {...register('image', { required: true })} onChange={handleImageChange} />
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
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '14px' }}>₹</span>
              <Input {...register('price', { required: true })} placeholder="25000" style={{ paddingLeft: '28px' }} type="number" />
            </div>
          </FormGroup>

          {category === 'PPF' && (
            <>
              <FormGroup>
                <Label>Thickness Options (3 variants, middle is default)</Label>
                {specOptions.thickness?.map((opt, idx) => (
                  <SpecOptionRow key={idx}>
                    <SmallInput value={opt.value} onChange={(e) => updateSpecOption('thickness', idx, 'value', e.target.value)} placeholder="e.g., 6.5 mil" />
                    <div style={{ position: 'relative', flex: 1 }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '14px' }}>₹</span>
                      <SmallInput value={opt.priceModifier} onChange={(e) => updateSpecOption('thickness', idx, 'priceModifier', e.target.value)} placeholder="0" type="number" style={{ paddingLeft: '28px' }} />
                    </div>
                    <input type="radio" checked={defaultSpecIndex.thickness === idx} onChange={() => setDefaultSpec('thickness', idx)} />
                  </SpecOptionRow>
                ))}
              </FormGroup>

              <FormGroup>
                <Label>Warranty Options (3 variants, middle is default)</Label>
                {specOptions.warranty?.map((opt, idx) => (
                  <SpecOptionRow key={idx}>
                    <SmallInput value={opt.value} onChange={(e) => updateSpecOption('warranty', idx, 'value', e.target.value)} placeholder="e.g., 7 years" />
                    <div style={{ position: 'relative', flex: 1 }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '14px' }}>₹</span>
                      <SmallInput value={opt.priceModifier} onChange={(e) => updateSpecOption('warranty', idx, 'priceModifier', e.target.value)} placeholder="0" type="number" style={{ paddingLeft: '28px' }} />
                    </div>
                    <input type="radio" checked={defaultSpecIndex.warranty === idx} onChange={() => setDefaultSpec('warranty', idx)} />
                  </SpecOptionRow>
                ))}
              </FormGroup>

              <FormGroup>
                <Label>Finish Options (3 variants, middle is default)</Label>
                {specOptions.finish?.map((opt, idx) => (
                  <SpecOptionRow key={idx}>
                    <SmallInput value={opt.value} onChange={(e) => updateSpecOption('finish', idx, 'value', e.target.value)} placeholder="e.g., Gloss" />
                    <div style={{ position: 'relative', flex: 1 }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '14px' }}>₹</span>
                      <SmallInput value={opt.priceModifier} onChange={(e) => updateSpecOption('finish', idx, 'priceModifier', e.target.value)} placeholder="0" type="number" style={{ paddingLeft: '28px' }} />
                    </div>
                    <input type="radio" checked={defaultSpecIndex.finish === idx} onChange={() => setDefaultSpec('finish', idx)} />
                  </SpecOptionRow>
                ))}
              </FormGroup>

              <FormGroup>
                <Label>Coverage Options (3 variants, middle is default)</Label>
                {specOptions.coverage?.map((opt, idx) => (
                  <SpecOptionRow key={idx}>
                    <SmallInput value={opt.value} onChange={(e) => updateSpecOption('coverage', idx, 'value', e.target.value)} placeholder="e.g., Full front coverage" />
                    <div style={{ position: 'relative', flex: 1 }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '14px' }}>₹</span>
                      <SmallInput value={opt.priceModifier} onChange={(e) => updateSpecOption('coverage', idx, 'priceModifier', e.target.value)} placeholder="0" type="number" style={{ paddingLeft: '28px' }} />
                    </div>
                    <input type="radio" checked={defaultSpecIndex.coverage === idx} onChange={() => setDefaultSpec('coverage', idx)} />
                  </SpecOptionRow>
                ))}
              </FormGroup>
            </>
          )}

          {category === 'Ceramic Coating' && (
            <>
              <FormGroup>
                <Label>Hardness Options (3 variants, middle is default)</Label>
                {specOptions.hardness?.map((opt, idx) => (
                  <SpecOptionRow key={idx}>
                    <SmallInput value={opt.value} onChange={(e) => updateSpecOption('hardness', idx, 'value', e.target.value)} placeholder="e.g., 9H" />
                    <div style={{ position: 'relative', flex: 1 }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '14px' }}>₹</span>
                      <SmallInput value={opt.priceModifier} onChange={(e) => updateSpecOption('hardness', idx, 'priceModifier', e.target.value)} placeholder="0" type="number" style={{ paddingLeft: '28px' }} />
                    </div>
                    <input type="radio" checked={defaultSpecIndex.hardness === idx} onChange={() => setDefaultSpec('hardness', idx)} />
                  </SpecOptionRow>
                ))}
              </FormGroup>

              <FormGroup>
                <Label>Warranty Options (3 variants, middle is default)</Label>
                {specOptions.warranty?.map((opt, idx) => (
                  <SpecOptionRow key={idx}>
                    <SmallInput value={opt.value} onChange={(e) => updateSpecOption('warranty', idx, 'value', e.target.value)} placeholder="e.g., 5 years" />
                    <div style={{ position: 'relative', flex: 1 }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '14px' }}>₹</span>
                      <SmallInput value={opt.priceModifier} onChange={(e) => updateSpecOption('warranty', idx, 'priceModifier', e.target.value)} placeholder="0" type="number" style={{ paddingLeft: '28px' }} />
                    </div>
                    <input type="radio" checked={defaultSpecIndex.warranty === idx} onChange={() => setDefaultSpec('warranty', idx)} />
                  </SpecOptionRow>
                ))}
              </FormGroup>

              <FormGroup>
                <Label>Layers Options (3 variants, middle is default)</Label>
                {specOptions.layers?.map((opt, idx) => (
                  <SpecOptionRow key={idx}>
                    <SmallInput value={opt.value} onChange={(e) => updateSpecOption('layers', idx, 'value', e.target.value)} placeholder="e.g., 2 layers" />
                    <div style={{ position: 'relative', flex: 1 }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '14px' }}>₹</span>
                      <SmallInput value={opt.priceModifier} onChange={(e) => updateSpecOption('layers', idx, 'priceModifier', e.target.value)} placeholder="0" type="number" style={{ paddingLeft: '28px' }} />
                    </div>
                    <input type="radio" checked={defaultSpecIndex.layers === idx} onChange={() => setDefaultSpec('layers', idx)} />
                  </SpecOptionRow>
                ))}
              </FormGroup>

              <FormGroup>
                <Label>Thickness Options (3 variants, middle is default)</Label>
                {specOptions.thickness?.map((opt, idx) => (
                  <SpecOptionRow key={idx}>
                    <SmallInput value={opt.value} onChange={(e) => updateSpecOption('thickness', idx, 'value', e.target.value)} placeholder="e.g., 2 microns" />
                    <div style={{ position: 'relative', flex: 1 }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '14px' }}>₹</span>
                      <SmallInput value={opt.priceModifier} onChange={(e) => updateSpecOption('thickness', idx, 'priceModifier', e.target.value)} placeholder="0" type="number" style={{ paddingLeft: '28px' }} />
                    </div>
                    <input type="radio" checked={defaultSpecIndex.thickness === idx} onChange={() => setDefaultSpec('thickness', idx)} />
                  </SpecOptionRow>
                ))}
              </FormGroup>
            </>
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
                <div style={{ position: 'relative', marginBottom: '10px' }}>
                  <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '14px' }}>₹</span>
                  <Input
                    value={addon.price}
                    onChange={(e) => updateAddon(addonIndex, 'price', e.target.value)}
                    placeholder="5000"
                    style={{ paddingLeft: '28px' }}
                    type="number"
                  />
                </div>
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

          <SubmitButton type="submit">Add Product</SubmitButton>
        </Form>
      </Container>
    </AddProductWrapper>
  );
};

export default AddProduct;
