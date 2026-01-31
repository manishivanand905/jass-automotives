import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;



export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  animation: ${fadeIn} 0.3s ease-out;
  backdrop-filter: blur(5px);
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: ${slideUp} 0.4s ease-out;

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 16px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 20px 20px 0 0;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    font-size: 28px;
    width: 36px;
    height: 36px;
  }
`;

export const ModalBody = styled.div`
  padding: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ServiceInfo = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 20px;
  }
`;

export const ServiceName = styled.h3`
  margin: 0 0 10px 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.heading};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ServicePrice = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.heading};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Input = styled.input`
  padding: 14px 16px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  @media (max-width: 768px) {
    padding: 12px 14px;
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
  padding: 14px 16px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s ease;
  font-family: inherit;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  @media (max-width: 768px) {
    padding: 12px 14px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  padding: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 16px;
  }
`;


