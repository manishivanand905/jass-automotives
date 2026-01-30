import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { serviceService } from '../../../services/serviceService';
import { bookingService } from '../../../services/bookingService';
import { locationsData } from '../../../data/locationsData';
import { PageTransition } from '../../../components/AnimatedWrapper';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
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
  const [selectedServices, setSelectedServices] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    fetchServices();
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    setValue('name', userData.name || '');
    setValue('email', userData.email || '');
    setValue('phone', userData.phone || '');
  }, []);

  const fetchServices = async () => {
    try {
      const data = await serviceService.getServices();
      setServices(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching services:', error);
      setLoading(false);
    }
  };

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const onSubmit = async (data) => {
    try {
      const selectedServiceDetails = services.filter(s => selectedServices.includes(s._id));
      const totalAmount = selectedServiceDetails.reduce((sum, s) => {
        const price = parseInt(s.price.replace(/[₹,]/g, ''));
        return sum + price;
      }, 0);

      for (const serviceId of selectedServices) {
        const service = services.find(s => s._id === serviceId);
        await bookingService.createBooking({
          serviceId: serviceId,
          vendorId: service.vendorId,
          customerName: data.name,
          email: data.email,
          phone: data.phone,
          carMake: data.carMake,
          carModel: data.carModel,
          carYear: data.carYear,
          location: data.location,
          preferredDate: data.preferredDate,
          preferredTime: data.preferredTime,
          additionalNotes: data.message,
          amount: `₹${service.price}`
        });
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        reset();
        setSelectedServices([]);
      }, 3000);
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again.');
    }
  };

  return (
    <PageTransition>
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

              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormRow>
                  <FormGroup>
                    <Label>Your Name *</Label>
                    <Input
                      type="text"
                      {...register("name", { required: true })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email *</Label>
                    <Input
                      type="email"
                      {...register("email", { required: true })}
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label>Phone Number *</Label>
                    <Input
                      type="tel"
                      {...register("phone", { required: true })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Location *</Label>
                    <Select
                      {...register("location", { required: true })}
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
                      placeholder="e.g., Toyota, Honda"
                      {...register("carMake", { required: true })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Car Model *</Label>
                    <Input
                      type="text"
                      placeholder="e.g., Camry, Civic"
                      {...register("carModel", { required: true })}
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label>Car Year</Label>
                    <Input
                      type="text"
                      placeholder="e.g., 2020"
                      {...register("carYear")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Preferred Date *</Label>
                    <Input
                      type="date"
                      {...register("preferredDate", { required: true })}
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label>Preferred Time *</Label>
                    <Select
                      {...register("preferredTime", { required: true })}
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
                  {loading ? (
                    <p style={{ color: '#aaa' }}>Loading services...</p>
                  ) : (
                    <ServicesList>
                      {services.map((service) => (
                        <ServiceItem key={service._id}>
                          <ServiceCheckbox
                            type="checkbox"
                            checked={selectedServices.includes(service._id)}
                            onChange={() => handleServiceToggle(service._id)}
                          />
                          <ServiceLabel>
                            {service.title}
                            <ServicePrice>{service.price}</ServicePrice>
                          </ServiceLabel>
                        </ServiceItem>
                      ))}
                    </ServicesList>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>Additional Notes</Label>
                  <TextArea
                    placeholder="Any specific requirements or concerns..."
                    rows="4"
                    {...register("message")}
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
    </PageTransition>
  );
};

export default BookService;
