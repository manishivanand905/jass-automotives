import React from "react";
import {
  HeroSection,
  HeroBackground,
  Overlay,
  HeroContent,
  LeftContent,
  RightContent,
  BigTitle,
  Tagline,
  CTAButton,
} from "./Hero.styles";

const Hero = ({ backgroundImage }) => {
  return (
    <HeroSection>
      <HeroBackground $bgImage={backgroundImage} />
      <Overlay />

      <HeroContent>
        {/* LEFT TEXT */}
        <LeftContent>
          <BigTitle>
            <span className="solid">Jass</span>
            <span className="outline">Automotive</span>
          </BigTitle>
        </LeftContent>

        {/* RIGHT TEXT */}
        <RightContent>
          <Tagline>
            Premium Auto Care Delivered <br /> with Precision
          </Tagline>

          <CTAButton href="/book-online">Get a Quote →</CTAButton>
        </RightContent>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
