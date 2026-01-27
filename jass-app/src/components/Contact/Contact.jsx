import React from "react";
import { useForm } from "react-hook-form";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
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
  const [ref, isVisible] = useScrollAnimation();
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    const scriptURL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent successfully.");
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Sorry, there was an error sending your message. Please try again.");
    }
  };

  return (
    <ContactWrapper ref={ref} $isVisible={isVisible}>
      <LeftSection>
        <Title>Contact us</Title>
        <Subtitle>
          This is the space to share the business's contact information.
        </Subtitle>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <FormGroup>
              <Label>
                First name <span>*</span>
              </Label>
              <Input
                type="text"
                placeholder="Enter your first name"
                {...register("firstName", { required: true })}
              />
            </FormGroup>

            <FormGroup>
              <Label>
                Last name <span>*</span>
              </Label>
              <Input
                type="text"
                placeholder="Enter your last name"
                {...register("lastName", { required: true })}
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
                placeholder="Enter your email"
                {...register("email", { required: true })}
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
                  placeholder="Enter phone number"
                  {...register("phone")}
                />
              </PhoneInputWrapper>
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label>Message</Label>
            <TextArea
              placeholder="Give a detailed example"
              rows="4"
              {...register("message")}
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
