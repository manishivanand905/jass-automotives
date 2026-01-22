import styled, { keyframes } from "styled-components";

const reveal = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const CertifiedExpertsWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  animation: ${reveal} 1.2s ease-out;

  @media (max-width: 968px) {
    min-height: 70vh;
  }

  @media (max-width: 576px) {
    min-height: 60vh;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 2;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1400px;
  width: 100%;
  height: 100%;
  padding: 100px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 968px) {
    padding: 60px 40px;
  }

  @media (max-width: 576px) {
    padding: 50px 25px;
  }
`;

export const Title = styled.h2`
  font-size: 72px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 50px 0;
  line-height: 1.2;
  font-style: italic;
  letter-spacing: -1px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  max-width: 1200px;

  @media (max-width: 1200px) {
    font-size: 64px;
    margin-bottom: 45px;
  }

  @media (max-width: 968px) {
    font-size: 48px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 35px;
  }

  @media (max-width: 576px) {
    font-size: 32px;
    margin-bottom: 30px;
    letter-spacing: -0.5px;
  }
`;
