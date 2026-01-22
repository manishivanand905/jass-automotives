import React, { useState } from 'react';
import { locationsData } from '../../data/locationsData';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
  ContactPageWrapper,
  HeroSection,
  HeroTitle,
  ContentSection,
  Container,
  LocationsSection,
  SectionTitle,
  LocationTabs,
  LocationTab,
  LocationContent,
  LocationInfo,
  InfoBlock,
  InfoTitle,
  InfoText,
  MapContainer,
  FormSection,
  FormTitle,
  Form,
  FormRow,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  SubmitButton
} from './ContactPage.styles';

const ContactPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(locationsData[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    carMake: '',
    carModel: '',
    carColor: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <>
      <Header />
      <ContactPageWrapper>
        <HeroSection>
          <HeroTitle>CONTACT US</HeroTitle>
        </HeroSection>

        <ContentSection>
          <Container>
            <LocationsSection>
              <SectionTitle>Our Locations</SectionTitle>
              <LocationTabs>
                {locationsData.map((location) => (
                  <LocationTab
                    key={location.id}
                    $active={selectedLocation.id === location.id}
                    onClick={() => setSelectedLocation(location)}
                  >
                    {location.city}
                  </LocationTab>
                ))}
              </LocationTabs>

              <LocationContent>
                <LocationInfo>
                  <InfoBlock>
                    <InfoTitle>Business Hours</InfoTitle>
                    <InfoText>{selectedLocation.businessHours.weekdays}</InfoText>
                    <InfoText>{selectedLocation.businessHours.weekdayTime}</InfoText>
                    <InfoText style={{ marginTop: '10px' }}>{selectedLocation.businessHours.weekend}</InfoText>
                    <InfoText>{selectedLocation.businessHours.weekendTime}</InfoText>
                  </InfoBlock>

                  <InfoBlock>
                    <InfoTitle>Call Us</InfoTitle>
                    <InfoText>{selectedLocation.phone}</InfoText>
                  </InfoBlock>

                  <InfoBlock>
                    <InfoTitle>Address</InfoTitle>
                    <InfoText>{selectedLocation.address}</InfoText>
                  </InfoBlock>
                </LocationInfo>

                <MapContainer>
                  <iframe
                    title={`${selectedLocation.city} Location`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://maps.google.com/maps?q=${selectedLocation.coordinates.lat},${selectedLocation.coordinates.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    allowFullScreen
                  />
                </MapContainer>
              </LocationContent>
            </LocationsSection>

            <FormSection>
              <FormTitle>Get in Touch</FormTitle>
              <Form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <Label>Your Name *</Label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Your E-mail *</Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label>Phone No *</Label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Select Your Service *</Label>
                    <Select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="detailing">Detailing</option>
                      <option value="repair">Repair</option>
                      <option value="bodyshop">Body Shop</option>
                      <option value="ppf">PPF Installation</option>
                      <option value="ceramic">Ceramic Coating</option>
                    </Select>
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label>Your Message</Label>
                  <TextArea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                  />
                </FormGroup>

                <FormRow>
                  <FormGroup>
                    <Label>Car Make *</Label>
                    <Input
                      type="text"
                      name="carMake"
                      value={formData.carMake}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Car Model *</Label>
                    <Input
                      type="text"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label>Car Color *</Label>
                    <Input
                      type="text"
                      name="carColor"
                      value={formData.carColor}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Your Location *</Label>
                    <Select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select location</option>
                      {locationsData.map((loc) => (
                        <option key={loc.id} value={loc.city}>
                          {loc.city}
                        </option>
                      ))}
                    </Select>
                  </FormGroup>
                </FormRow>

                <SubmitButton type="submit">Submit</SubmitButton>
              </Form>
            </FormSection>
          </Container>
        </ContentSection>
      </ContactPageWrapper>
      <Footer />
    </>
  );
};

export default ContactPage;
