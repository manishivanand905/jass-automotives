import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ConfirmationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const ConfirmationCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const Icon = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.light};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h2`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 15px;
  font-weight: 700;
`;

export const Message = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 30px;
  line-height: 1.6;
`;

export const BookingDetails = styled.div`
  margin-bottom: 30px;
  text-align: left;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 20px 0;
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`;

export const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 600;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
  }
`;
