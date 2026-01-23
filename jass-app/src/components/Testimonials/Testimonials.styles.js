import styled from "styled-components";

export const TestimonialsSection = styled.section`
  background-color: #2d2d2d;
  padding: 80px 20px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  filter: blur(${props => props.$isVisible ? '0px' : '10px'});
  transform: translateY(${props => props.$isVisible ? '0' : '30px'});
  transition: opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 15px;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: 768px) {
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 80px;
  max-width: 500px;

  @media (max-width: 1024px) {
    font-size: 40px;
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 50px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0px;
  }
`;

export const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
  gap: 10px;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

export const TopBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: #6b6b6b;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const Quote = styled.p`
  color: #ffffff;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 0;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 17px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const AuthorName = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;
