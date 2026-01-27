import styled from 'styled-components';

export const BookServiceWrapper = styled.div`
  width: 100%;
  background-color: #292929;
`;

export const HeroSection = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url('/book-service-hero.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    height: 35vh;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: white;
  z-index: 1;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 576px) {
    font-size: 32px;
  }
`;

export const ContentSection = styled.div`
  width: 100%;
  padding: 80px 0;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: 1200px) {
    padding: 0 60px;
  }

  @media (max-width: 768px) {
    padding: 0 40px;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;

export const FormSection = styled.div`
  background-color: #3a3a3a;
  border-radius: 12px;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 35px;
  }

  @media (max-width: 576px) {
    padding: 25px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: white;
  margin: 0 0 40px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: white;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  padding: 14px 16px;
  background-color: #292929;
  border: 2px solid #4a4a4a;
  border-radius: 8px;
  color: white;
  font-size: 15px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #cc0000;
  }

  @media (max-width: 576px) {
    padding: 12px 14px;
    font-size: 14px;
  }
`;

export const Select = styled.select`
  padding: 14px 16px;
  background-color: #292929;
  border: 2px solid #4a4a4a;
  border-radius: 8px;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #cc0000;
  }

  option {
    background-color: #292929;
  }

  @media (max-width: 576px) {
    padding: 12px 14px;
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
  padding: 14px 16px;
  background-color: #292929;
  border: 2px solid #4a4a4a;
  border-radius: 8px;
  color: white;
  font-size: 15px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #cc0000;
  }

  @media (max-width: 576px) {
    padding: 12px 14px;
    font-size: 14px;
  }
`;

export const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  padding: 20px;
  background-color: #292929;
  border-radius: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ServiceCheckbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #cc0000;
`;

export const ServiceLabel = styled.label`
  font-size: 15px;
  color: #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex: 1;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const ServicePrice = styled.span`
  color: #cc0000;
  font-weight: 600;
  margin-left: 10px;
`;

export const SubmitButton = styled.button`
  padding: 16px 40px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #b30000;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 576px) {
    width: 100%;
    padding: 14px;
    font-size: 16px;
  }
`;

export const SuccessMessage = styled.div`
  padding: 20px;
  background-color: #4caf50;
  color: white;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 600;
`;
