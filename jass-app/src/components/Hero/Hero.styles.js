import styled, { keyframes } from "styled-components";

const blurIn = keyframes`
  from {
    filter: blur(20px);
  }
  to {
    filter: blur(0);
  }
`;

const glideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const glideRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 565px) {
    height: 80vh;
  }
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.$bgImage || "/hero-bg.jpg"});
  background-size: cover;
  background-position: center;
  z-index: 1;
  animation: ${blurIn} 1.5s ease-out;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.5) 40%,
    rgba(0, 0, 0, 0.3) 70%,
    rgba(0, 0, 0, 0.85) 100%
  );
  z-index: 2;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 80px 80px;
  color: white;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: start;
    justify-content: end;
    padding: 0 20px 70px;
  }
`;

export const LeftContent = styled.div`
  padding-left: 80px;
  animation: ${glideLeft} 1s ease-out 0.3s both;

  @media (max-width: 900px) {
    padding-left: 0;
    text-align: start;
  }
`;

export const BigTitle = styled.h1`
  font-size: 130px;
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -3px;
  color: white;

  span {
    display: block;
  }

  .outline {
    color: transparent;
    -webkit-text-stroke: 2px white;
  }

  @media (max-width: 900px) {
    font-size: 62px;
  }
`;

export const RightContent = styled.div`
  text-align: center;
  max-width: 400px;
  padding-right: 80px;
  color: white;
  animation: ${glideRight} 1s ease-out 0.3s both;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    text-align: center;
    margin-top: 60px;
    padding-right: 0;
    align-items: start;
  }
`;

export const Tagline = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
  color: white;
  text-align: justify;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

export const CTAButton = styled.a`
  color: white;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid white;
  padding-bottom: 4px;
  transition: 0.3s ease;

  &:hover {
    color: #c90000;
    border-color: #c90000;
  }

  @media (max-width: 900px) {
    font-size: 13px;
  }
`;
