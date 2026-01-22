import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { testimonialsData } from "../../data/testimonialsData";
import {
  TestimonialsSection,
  Container,
  Title,
  TestimonialsGrid,
  TestimonialCard,
  TopBorder,
  Quote,
  AuthorName,
} from "./Testimonials.styles";

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <TestimonialsSection ref={ref} $isVisible={isVisible}>
      <Container>
        <Title>Real Stories from Our Satisfied Customers</Title>
        <TestimonialsGrid>
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <div>
                <TopBorder />
                <Quote>"{testimonial.text}"</Quote>
              </div>
              <AuthorName>{testimonial.name}</AuthorName>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
