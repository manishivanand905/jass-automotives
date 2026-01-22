import React, { useState } from "react";
import {
  ContactWrapper,
  LeftSection,
  RightSection,
  CarImage,
  Title,
  Subtitle,
  Form,
  FormRow,
  FormGroup,
  Label,
  Input,
  PhoneInputWrapper,
  CountryFlag,
  PhoneInput,
  TextArea,
  SubmitButton,
} from "./Contact.styles";

const Contact = ({ carImage }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with your Google Apps Script Web App URL
    // Instructions:
    // 1. Go to Google Sheets and create a new spreadsheet
    // 2. Go to Extensions > Apps Script
    // 3. Copy the code from the third file below
    // 4. Deploy as Web App
    // 5. Copy the deployment URL and replace it here
    const scriptURL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactWrapper>
      <LeftSection>
        <Title>Contact us</Title>
        <Subtitle>
          This is the space to share the business's contact information.
        </Subtitle>

        <Form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label>
                First name <span>*</span>
              </Label>
              <Input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                Last name <span>*</span>
              </Label>
              <Input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <Label>
                Email <span>*</span>
              </Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Phone</Label>
              <PhoneInputWrapper>
                <CountryFlag
                  src="https://flagcdn.com/w40/in.png"
                  alt="India flag"
                />
                <PhoneInput
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </PhoneInputWrapper>
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label>Message</Label>
            <TextArea
              name="message"
              placeholder="Give a detailed example"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Get a Quote"}
          </SubmitButton>
        </Form>
      </LeftSection>

      <RightSection>
        <CarImage
          src={carImage || `${process.env.PUBLIC_URL}/red-car-engine.jpg`}
          alt="Red car engine"
        />
      </RightSection>
    </ContactWrapper>
  );
};

export default Contact;
