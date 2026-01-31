import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const JourneyWrapper = styled.section`
  width: 100%;
  display: flex;
  min-height: 100vh;
  background-color: #000000;
  opacity: ${props => props.$isVisible ? 1 : 0};
  filter: blur(${props => props.$isVisible ? '0px' : '10px'});
  transform: translateY(${props => props.$isVisible ? '0' : '30px'});
  transition: opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out;

  @media (max-width: 968px) {
    flex-direction: column;
    min-height: auto;
    position: relative;
    background-image: url(${props => props.$bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 1;
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  background-color: #000000;

  @media (max-width: 968px) {
    display: none;
  }
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center left;
  opacity: 0.95;

  @media (max-width: 968px) {
    height: auto;
    object-fit: contain;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 80px;
  position: relative;

  @media (max-width: 1200px) {
    padding: 80px 60px;
  }

  @media (max-width: 968px) {
    padding: 80px 40px;
    align-items: center;
    background-color: transparent;
    z-index: 2;
  }

  @media (max-width: 576px) {
    padding: 60px 25px;
  }
`;

export const IconContainer = styled.div`
  width: 160px;
  height: 160px;
  background-color: #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  margin: 0 auto 40px;

  @media (max-width: 1200px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 968px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 576px) {
    width: 100px;
    height: 100px;
    margin-bottom: 30px;
  }
`;

export const WheelIcon = styled.svg`
  width: 75%;
  height: 75%;
  animation: ${rotate} 8s linear infinite;
`;

export const Title = styled.h2`
  font-size: 52px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 50px 0;
  line-height: 1.15;
  letter-spacing: -0.5px;

  @media (max-width: 1200px) {
    font-size: 46px;
    margin-bottom: 40px;
  }

  @media (max-width: 968px) {
    font-size: 40px;
    margin-bottom: 35px;
    text-align: center;
    color: #ffffff;
  }

  @media (max-width: 576px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 550px;

  @media (max-width: 968px) {
    max-width: 100%;
    gap: 20px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16.5px;
  line-height: 1.75;
  color: #3a3a3a;
  margin: 0;
  font-weight: 400;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 968px) {
    text-align: center;
    font-size: 15.5px;
    color: #ffffff;
  }

  @media (max-width: 576px) {
    font-size: 14.5px;
    line-height: 1.7;
  }
`;
