import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  CertifiedExpertsWrapper,
  BackgroundImage,
  ContentContainer,
  Title,
} from "./CertifiedExperts.styles";

const CertifiedExperts = ({ backgroundImage }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <CertifiedExpertsWrapper ref={ref} $isVisible={isVisible}>
      <BackgroundImage
        $bgImage={backgroundImage || `${process.env.PUBLIC_URL}/garage-bg.jpg`}
      />

      <ContentContainer>
        <Title>
          Superior Vehicle Services from
          <br />
          Certified Experts
        </Title>
      </ContentContainer>
    </CertifiedExpertsWrapper>
  );
};

export default CertifiedExperts;
