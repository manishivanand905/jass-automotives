import styled, { keyframes } from "styled-components";

const float = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ServicesWrapper = styled.section`
  width: 100%;
  background-color: #e8e8e8;
  padding: 100px 0 120px;
  position: relative;
  opacity: ${props => props.$isVisible ? 1 : 0};
  filter: blur(${props => props.$isVisible ? '0px' : '10px'});
  transform: translateY(${props => props.$isVisible ? '0' : '30px'});
  transition: opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out;

  @media (max-width: 968px) {
    padding: 80px 0 100px;
  }

  @media (max-width: 576px) {
    padding: 60px 0 80px;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: 1200px) {
    padding: 0 60px;
  }

  @media (max-width: 968px) {
    padding: 0 40px;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 60px;
  gap: 40px;

  @media (max-width: 968px) {
    flex-direction: column;
    margin-bottom: 50px;
    gap: 30px;
  }

  @media (max-width: 576px) {
    margin-bottom: 40px;
  }
`;

export const LeftContent = styled.div`
  flex: 1;
  max-width: 500px;

  @media (max-width: 968px) {
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 52px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 1200px) {
    font-size: 46px;
  }

  @media (max-width: 968px) {
    font-size: 40px;
  }

  @media (max-width: 576px) {
    font-size: 32px;
  }
`;

export const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 25px;
  max-width: 600px;
  padding-top: 40px;
  padding-right: 40px;

  @media (max-width: 968px) {
    align-items: flex-start;
    max-width: 100%;
    padding-top: 0;
    padding-right: 0;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #4a4a4a;
  margin: 0;
  text-align: right;

  @media (max-width: 968px) {
    text-align: left;
  }

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const ViewAllLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #cc0000;
  text-decoration: none;
  cursor: pointer;
  transition: gap 0.3s ease;

  &:hover {
    gap: 12px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const CarImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  position: relative;

  @media (max-width: 968px) {
    margin-bottom: 50px;
  }

  @media (max-width: 576px) {
    margin-bottom: 40px;
  }
`;

export const CarImage = styled.img`
  max-width: 700px;
  width: 100%;
  height: auto;
  object-fit: contain;

  @media (max-width: 968px) {
    max-width: 500px;
  }

  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const CarouselContainer = styled.div`
  display: flex;
  gap: 30px;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.$translateX}px);

  @media (max-width: 968px) {
    gap: 20px;
  }

  @media (max-width: 576px) {
    gap: 15px;
  }
`;

export const ServiceCard = styled.div`
  min-width: calc(33.333% - 20px);
  background-color: #ffffff;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 1200px) {
    min-width: calc(50% - 15px);
  }

  @media (max-width: 768px) {
    min-width: calc(100% - 10px);
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;

  @media (max-width: 576px) {
    height: 220px;
  }
`;

export const ServiceContent = styled.div`
  padding: 30px;

  @media (max-width: 576px) {
    padding: 25px;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 15px 0;

  @media (max-width: 576px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

export const ServiceDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #4a4a4a;
  margin: 0 0 15px 0;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const ServiceReview = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #6a6a6a;
  font-style: italic;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

export const CategoryCard = styled.div`
  background-color: #ffffff;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;

  @media (max-width: 576px) {
    height: 220px;
  }
`;

export const CategoryContent = styled.div`
  padding: 30px;

  @media (max-width: 576px) {
    padding: 25px;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 15px 0;

  @media (max-width: 576px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

export const CategoryDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #4a4a4a;
  margin: 0 0 15px 0;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const CategoryReview = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #6a6a6a;
  font-style: italic;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;

  @media (max-width: 576px) {
    margin-top: 30px;
  }
`;

export const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #1a1a1a;
  background-color: ${(props) => (props.$active ? "#1a1a1a" : "transparent")};
  color: ${(props) => (props.$active ? "#ffffff" : "#1a1a1a")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 20px;

  &:hover {
    background-color: #1a1a1a;
    color: #ffffff;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 576px) {
    width: 45px;
    height: 45px;
    font-size: 18px;
  }
`;

export const HoverButton = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #cc0000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
  pointer-events: none;

  svg {
    width: 24px;
    height: 24px;
    color: white;
  }

  ${CategoryCard}:hover & {
    opacity: 1;
    transform: scale(1);
  }

  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    bottom: 25px;
    right: 25px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
