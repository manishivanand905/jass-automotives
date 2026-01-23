import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  JourneyWrapper,
  ImageContainer,
  CarImage,
  ContentContainer,
  IconContainer,
  WheelIcon,
  Title,
  Description,
  Paragraph,
} from "./Journey.styles";

const Journey = ({ carImage }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <JourneyWrapper ref={ref} $isVisible={isVisible} $bgImage={carImage}>
      <ImageContainer>
        <CarImage
          src={carImage || `${process.env.PUBLIC_URL}/hero-bg.jpg`}
          alt="Red car in auto care facility"
        />
      </ImageContainer>

      <ContentContainer>
        <IconContainer>
          <WheelIcon viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Outer circle */}
            <circle
              cx="100"
              cy="100"
              r="75"
              fill="none"
              stroke="white"
              strokeWidth="3"
            />

            {/* Center hub */}
            <circle cx="100" cy="100" r="12" fill="white" />

            {/* Spokes design - 8 curved segments */}
            <g fill="white">
              {/* Top segment */}
              <path d="M 90 40 Q 95 35 100 35 Q 105 35 110 40 L 108 55 Q 100 52 92 55 Z" />

              {/* Top-right segment */}
              <path d="M 140 60 Q 145 55 150 55 Q 155 55 160 60 L 152 72 Q 145 68 138 72 Z" />

              {/* Right segment */}
              <path d="M 160 90 Q 165 95 165 100 Q 165 105 160 110 L 145 108 Q 148 100 145 92 Z" />

              {/* Bottom-right segment */}
              <path d="M 140 140 Q 145 145 150 145 Q 155 145 160 140 L 152 128 Q 145 132 138 128 Z" />

              {/* Bottom segment */}
              <path d="M 90 160 Q 95 165 100 165 Q 105 165 110 160 L 108 145 Q 100 148 92 145 Z" />

              {/* Bottom-left segment */}
              <path d="M 40 140 Q 35 145 35 150 Q 35 155 40 160 L 52 152 Q 48 145 52 138 Z" />

              {/* Left segment */}
              <path d="M 40 90 Q 35 95 35 100 Q 35 105 40 110 L 55 108 Q 52 100 55 92 Z" />

              {/* Top-left segment */}
              <path d="M 40 60 Q 35 55 35 50 Q 35 45 40 40 L 52 48 Q 48 55 52 62 Z" />
            </g>

            {/* Bolt holes around center */}
            <circle cx="100" cy="50" r="5" fill="white" />
            <circle cx="135.36" cy="64.64" r="5" fill="white" />
            <circle cx="150" cy="100" r="5" fill="white" />
            <circle cx="135.36" cy="135.36" r="5" fill="white" />
            <circle cx="100" cy="150" r="5" fill="white" />
            <circle cx="64.64" cy="135.36" r="5" fill="white" />
            <circle cx="50" cy="100" r="5" fill="white" />
            <circle cx="64.64" cy="64.64" r="5" fill="white" />
          </WheelIcon>
        </IconContainer>

        <Title>
          Our Journey in
          <br />
          Auto Care
        </Title>

        <Description>
          <Paragraph>
            At Jass Automotives, we combine expert knowledge, advanced tools,
            and a passion for perfection to bring you the best in vehicle care.
            What sets us apart is our commitment to honesty, precision, and
            customer satisfaction.
          </Paragraph>

          <Paragraph>
            We treat every vehicle as if it were our own—ensuring safety,
            performance, and peace of mind.
          </Paragraph>
        </Description>
      </ContentContainer>
    </JourneyWrapper>
  );
};

export default Journey;
