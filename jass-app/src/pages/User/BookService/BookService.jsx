import React from 'react';
import { useForm } from 'react-hook-form';
import { servicesData } from '../../../data/servicesData';
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
  const [selectedServices, setSelectedServices] = React.useState([]);
  const [submitted, setSubmitted] = React.useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const onSubmit = (data) => {
    console.log('Booking submitted:', { ...data, services: selectedServices });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
      setSelectedServices([]);
    }, 3000);
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
