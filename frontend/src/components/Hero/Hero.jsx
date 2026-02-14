import React from "react";
import { FadeIn, SlideIn } from "../AnimatedWrapper";
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
          <SlideIn direction="left" delay={0.2}>
            <BigTitle>
              <span className="solid">Jass</span>
              <span className="outline">Automotive</span>
            </BigTitle>
          </SlideIn>
        </LeftContent>

        {/* RIGHT TEXT */}
        <RightContent>
          <SlideIn direction="right" delay={0.4}>
            <Tagline>
              Premium Auto Care Delivered <br /> with Precision
            </Tagline>
          </SlideIn>

          <FadeIn delay={0.6}>
            <CTAButton href="/book-service">Get a Quote →</CTAButton>
          </FadeIn>
        </RightContent>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
