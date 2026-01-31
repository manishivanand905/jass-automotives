import styled from 'styled-components';

export const ContactPageWrapper = styled.div`
  width: 100%;
  background-color: #292929;
`;

export const HeroSection = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url('/contact-hero.jpg');
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
    height: 40vh;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 72px;
  font-weight: 700;
  color: white;
  z-index: 1;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 576px) {
    font-size: 36px;
  }
`;

export const ContentSection = styled.div`
  width: 100%;
  background-color: #292929;
  padding: 80px 0;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
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

export const LocationsSection = styled.div`
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: white;
  margin: 0 0 40px 0;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }

  @media (max-width: 576px) {
    font-size: 26px;
  }
`;

export const LocationTabs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    gap: 10px;
  }
`;

export const LocationTab = styled.button`
  padding: 12px 30px;
  background-color: ${props => props.$active ? '#cc0000' : '#3a3a3a'};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }

  @media (max-width: 576px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const LocationContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background-color: #3a3a3a;
  border-radius: 12px;
  padding: 40px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 30px;
  }

  @media (max-width: 576px) {
    padding: 20px;
  }
`;

export const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #cc0000;
  margin: 0 0 10px 0;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const InfoText = styled.p`
  font-size: 16px;
  color: #ccc;
  margin: 0;
  line-height: 1.6;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 968px) {
    height: 300px;
  }

  @media (max-width: 576px) {
    height: 250px;
  }
`;

export const FormSection = styled.div`
  background-color: #3a3a3a;
  border-radius: 12px;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 576px) {
    padding: 20px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin: 0 0 30px 0;

  @media (max-width: 576px) {
    font-size: 26px;
    margin-bottom: 25px;
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
  gap: 8px;
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
  padding: 12px 16px;
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
    padding: 10px 14px;
    font-size: 14px;
  }
`;

export const Select = styled.select`
  padding: 12px 16px;
  background-color: #292929;
  border: 2px solid #4a4a4a;
  border-radius: 8px;
  color: white;
  font-size: 15px;
  transition: border-color 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #cc0000;
  }

  option {
    background-color: #292929;
    color: white;
  }

  @media (max-width: 576px) {
    padding: 10px 14px;
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px 16px;
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
    padding: 10px 14px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  padding: 14px 40px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    background-color: #b30000;
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    width: 100%;
    padding: 12px;
    font-size: 15px;
  }
`;
