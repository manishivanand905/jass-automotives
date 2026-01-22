import React from "react";
import {
  CertifiedExpertsWrapper,
  BackgroundImage,
  ContentContainer,
  Title,
} from "./CertifiedExperts.styles";

const CertifiedExperts = ({ backgroundImage }) => {
  return (
    <CertifiedExpertsWrapper>
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
