import styled, { keyframes } from "styled-components";

const shutterLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const shutterRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ContactWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #e8e8e8;

  @media (max-width: 968px) {
    flex-direction: column;
    min-height: auto;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  padding: 100px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e8e8e8;
  animation: ${shutterLeft} 1s ease-out;

  @media (max-width: 1200px) {
    padding: 80px 60px;
  }

  @media (max-width: 968px) {
    padding: 60px 40px;
  }

  @media (max-width: 576px) {
    padding: 50px 25px;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  background-color: #1a1a1a;
  animation: ${shutterRight} 1s ease-out;

  @media (max-width: 968px) {
    min-height: 500px;
  }

  @media (max-width: 576px) {
    min-height: 400px;
  }
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.h2`
  font-size: 56px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 20px 0;
  line-height: 1.2;

  @media (max-width: 1200px) {
    font-size: 50px;
  }

  @media (max-width: 968px) {
    font-size: 44px;
  }

  @media (max-width: 576px) {
    font-size: 36px;
    margin-bottom: 15px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #4a4a4a;
  margin: 0 0 50px 0;

  @media (max-width: 968px) {
    margin-bottom: 40px;
  }

  @media (max-width: 576px) {
    font-size: 15px;
    margin-bottom: 35px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 600px;

  @media (max-width: 576px) {
    gap: 25px;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  @media (max-width: 576px) {
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
  font-weight: 500;
  color: #2a2a2a;

  span {
    color: #d32f2f;
    margin-left: 2px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  padding: 14px 0;
  font-size: 16px;
  font-style: italic;
  color: #5a5a5a;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #c0c0c0;
  outline: none;
  transition: border-color 0.3s ease;
  font-family: inherit;

  &::placeholder {
    color: #8a8a8a;
    font-style: italic;
  }

  &:focus {
    border-bottom-color: #1a1a1a;
  }

  @media (max-width: 576px) {
    padding: 12px 0;
    font-size: 15px;
  }
`;

export const PhoneInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #c0c0c0;
  padding: 14px 0;
  transition: border-color 0.3s ease;

  &:focus-within {
    border-bottom-color: #1a1a1a;
  }

  @media (max-width: 576px) {
    padding: 12px 0;
  }
`;

export const CountryFlag = styled.img`
  width: 24px;
  height: 18px;
  margin-right: 8px;
  border: 1px solid #ddd;
`;

export const PhoneInput = styled.input`
  flex: 1;
  padding: 0;
  font-size: 16px;
  font-style: italic;
  color: #5a5a5a;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  margin-left: 8px;

  &::placeholder {
    color: #8a8a8a;
    font-style: italic;
  }

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const TextArea = styled.textarea`
  padding: 14px 0;
  font-size: 16px;
  font-style: italic;
  color: #5a5a5a;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #c0c0c0;
  outline: none;
  transition: border-color 0.3s ease;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;

  &::placeholder {
    color: #8a8a8a;
    font-style: italic;
  }

  &:focus {
    border-bottom-color: #1a1a1a;
  }

  @media (max-width: 576px) {
    padding: 12px 0;
    font-size: 15px;
    min-height: 80px;
  }
`;

export const SubmitButton = styled.button`
  width: fit-content;
  padding: 16px 50px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: #2a2a2a;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  font-family: inherit;

  &:hover {
    background-color: #cc0000;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 576px) {
    padding: 14px 40px;
    font-size: 15px;
    width: 100%;
  }
`;
