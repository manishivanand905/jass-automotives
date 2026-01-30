import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ServiceDetailWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #292929 100%);
  padding: 40px 20px;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

export const ServiceDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  animation: ${slideInLeft} 0.5s ease-out;

  span {
    font-size: 20px;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateX(-5px);

    span {
      transform: translateX(-3px);
    }
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const ServiceHero = styled.div`
  position: relative;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  animation: ${scaleIn} 0.6s ease-out;

  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 30px;
  }
`;

export const ServiceHeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ServiceHero}:hover & {
    transform: scale(1.05);
  }
`;

export const ServiceHeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
`;

export const ServiceHeroContent = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  right: 40px;
  color: white;
  z-index: 1;

  @media (max-width: 768px) {
    bottom: 20px;
    left: 20px;
    right: 20px;
  }
`;

export const ServiceMainTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: ${slideInLeft} 0.7s ease-out 0.2s both;

  @media (max-width: 968px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;

export const ServiceMetaInfo = styled.div`
  display: flex;
  gap: 30px;
  animation: ${slideInLeft} 0.7s ease-out 0.3s both;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 10px 20px;
  border-radius: 50px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
  }
`;

export const MetaIcon = styled.span`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const MetaText = styled.span`
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const LeftColumn = styled.div`
  animation: ${slideInLeft} 0.6s ease-out 0.3s both;
`;

export const RightColumn = styled.div`
  animation: ${slideInRight} 0.6s ease-out 0.3s both;

  @media (max-width: 968px) {
    order: -1;
  }
`;

export const Section = styled.section`
  background: ${(props) => (props.$dark ? "#292929" : "white")};
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 30px;
  box-shadow: 0 4px 20px #292929;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${(props) => (props.$dark ? "white" : "#1a1a1a")};
  margin: 0 0 20px 0;
  position: relative;
  padding-bottom: 15px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: #cc0000;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 15px;
  }
`;

export const SectionDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${(props) => (props.$dark ? "#ccc" : "#555")};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const KeyPointsGrid = styled.div`
  display: grid;
  gap: 15px;
`;

export const KeyPointCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background: #3a3a3a;
  border-radius: 12px;
  border-left: 4px solid #cc0000;
  transition: all 0.3s ease;

  &:hover {
    background: #454545;
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(204, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const KeyPointIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #cc0000;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
  font-size: 14px;
`;

export const KeyPointText = styled.p`
  margin: 0;
  font-size: 15px;
  color: white;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ReviewCard = styled.div`
  position: relative;
  padding: 25px;
  background: #cc0000;
  border-radius: 16px;
  color: white;
  box-shadow: 0 8px 25px rgba(204, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const QuoteIcon = styled.div`
  font-size: 60px;
  line-height: 1;
  opacity: 0.3;
  margin-bottom: 10px;
  font-family: Georgia, serif;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const ReviewText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  margin: 0 0 15px 0;
  font-style: italic;
  color: white;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ReviewAuthor = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  text-align: right;
  color: white;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const PriceCard = styled.div`
  background: #292929;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 100px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 968px) {
    position: static;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const PriceLabel = styled.p`
  font-size: 14px;
  color: #ccc;
  margin: 0 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`;

export const PriceAmount = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: #cc0000;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const BookNowButton = styled.button`
  width: 80%;
  padding: 16px;
  background: #cc0000;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin: 20px auto 0;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: #b30000;
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 16px;
  }
`;

export const RelatedServices = styled.div`
  margin-top: 60px;
  animation: ${fadeIn} 0.6s ease-out 0.5s both;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const RelatedTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin: 0 0 30px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const RelatedServiceCard = styled.div`
  background: #292929;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
  }
`;

export const RelatedServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${RelatedServiceCard}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    height: 180px;
  }
`;

export const RelatedServiceTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: white;
  padding: 20px 20px 10px 20px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px 15px 10px 15px;
  }
`;

export const ViewButton = styled.button`
  width: calc(100% - 40px);
  margin: 0 20px 20px 20px;
  padding: 12px;
  background: transparent;
  color: #cc0000;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: calc(100% - 30px);
    margin: 0 15px 15px 15px;
  }
`;
