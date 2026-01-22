import React, { useState } from 'react';
import { servicesData } from '../../data/servicesData';
import { locationsData } from '../../data/locationsData';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
  BookServiceWrapper,
  HeroSection,
  HeroTitle,
  ContentSection,
  Container,
  FormSection,
  FormTitle,
  Form,
  FormRow,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  ServicesList,
  ServiceItem,
  ServiceCheckbox,
  ServiceLabel,
  ServicePrice,
  SubmitButton,
  SuccessMessage
} from './BookService.styles';

const BookService = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carMake: '',
    carModel: '',
    carYear: '',
    location: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [selectedServices, setSelectedServices] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, services: selectedServices });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        carMake: '',
        carModel: '',
        carYear: '',
        location: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
      setSelectedServices([]);
    }, 3000);
  };

  return (
    <>
      <Header />
      <BookServiceWrapper>
        <HeroSection>
          <HeroTitle>BOOK A SERVICE</HeroTitle>
        </HeroSection>

        <ContentSection>
          <Container>
            <FormSection>
              <FormTitle>Schedule Your Service</FormTitle>
              
              {submitted && (
                <SuccessMessage>
                  Thank you! Your booking request has been submitted. We'll contact you shortly.
                </SuccessMessage>
              )}

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
                    <Label>Email *</Label>
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
                    <Label>Location *</Label>
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

                <FormRow>
                  <FormGroup>
                    <Label>Car Make *</Label>
                    <Input
                      type="text"
                      name="carMake"
                      placeholder="e.g., Toyota, Honda"
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
                      placeholder="e.g., Camry, Civic"
                      value={formData.carModel}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label>Car Year</Label>
                    <Input
                      type="text"
                      name="carYear"
                      placeholder="e.g., 2020"
                      value={formData.carYear}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Preferred Date *</Label>
                    <Input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label>Preferred Time *</Label>
                    <Select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select time</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                    </Select>
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label>Select Services * (Choose at least one)</Label>
                  <ServicesList>
                    {servicesData.map((service) => (
                      <ServiceItem key={service.id}>
                        <ServiceCheckbox
                          type="checkbox"
                          checked={selectedServices.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                        />
                        <ServiceLabel>
                          {service.title}
                          <ServicePrice>{service.price}</ServicePrice>
                        </ServiceLabel>
                      </ServiceItem>
                    ))}
                  </ServicesList>
                </FormGroup>

                <FormGroup>
                  <Label>Additional Notes</Label>
                  <TextArea
                    name="message"
                    placeholder="Any specific requirements or concerns..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                  />
                </FormGroup>

                <SubmitButton type="submit" disabled={selectedServices.length === 0}>
                  Book Service
                </SubmitButton>
              </Form>
            </FormSection>
          </Container>
        </ContentSection>
      </BookServiceWrapper>
      <Footer />
    </>
  );
};

export default BookService;
