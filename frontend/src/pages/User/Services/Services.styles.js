import styled, { keyframes } from "styled-components";

const blurIn = keyframes`
  from {
    filter: blur(10px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const ServicesWrapper = styled.div`
  width: 100%;
  background-color: #292929;
  min-height: 100vh;
  animation: ${blurIn} 0.8s ease-out;
`;

export const ServicesContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl} 40px;
  }
`;

export const ServicesHeader = styled.div`
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const ServicesTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: white;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const CategoryFilter = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 10px;
  }
`;

export const CategoryButton = styled.button`
  padding: 10px 24px;
  background-color: ${props => props.$active ? '#cc0000' : 'transparent'};
  color: ${props => props.$active ? '#ffffff' : '#ffffff'};
  border: 2px solid ${props => props.$active ? '#cc0000' : '#555'};
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.$active ? '#b30000' : '#cc0000'};
    border-color: #cc0000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 18px;
    font-size: 13px;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ServiceCard = styled.div`
  background-color: transparent;
  border-radius: 8px;
  overflow: hidden;
  transition:
    transform ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
`;

export const ServiceImageWrapper = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 220px;
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.slow};

  ${ServiceCard}:hover & {
    transform: scale(1.1);
  }
`;

export const ServiceContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: #ffffff;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

export const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const KeyPointsLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-style: italic;
`;

export const KeyPointsList = styled.ul`
  list-style: none;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const KeyPointItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;
  line-height: 1.6;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 4px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }
`;

export const ServiceFooter = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 0;
`;

export const BookButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 38px;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-align: center;
  text-decoration: none;
  border-radius: 0;
  border: none;
  cursor: pointer;
  transition:
    background-color ${({ theme }) => theme.transitions.normal},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;
