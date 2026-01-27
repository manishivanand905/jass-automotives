import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { servicesData } from "../../../data/servicesData";
import { PageTransition } from "../../../components/AnimatedWrapper";
import Header from "../../../components/Header/Header";
import Contact from "../../../components/Contact/Contact";
import Footer from "../../../components/Footer/Footer";
import BookingModal from "../../../components/BookingModal/BookingModal";
import {
  ServiceDetailWrapper,
  ServiceDetailContainer,
  BackButton,
  ServiceHero,
  ServiceHeroImage,
  ServiceHeroOverlay,
  ServiceHeroContent,
  ServiceMainTitle,
  ServiceMetaInfo,
  MetaItem,
  MetaIcon,
  MetaText,
  ContentGrid,
  LeftColumn,
  RightColumn,
  Section,
  SectionTitle,
  SectionDescription,
  KeyPointsGrid,
  KeyPointCard,
  KeyPointIcon,
  KeyPointText,
  ReviewCard,
  ReviewText,
  ReviewAuthor,
  QuoteIcon,
  PriceCard,
  PriceLabel,
  PriceAmount,
  BookNowButton,
  RelatedServices,
  RelatedTitle,
  RelatedGrid,
  RelatedServiceCard,
  RelatedServiceImage,
  RelatedServiceTitle,
  ViewButton,
} from "./ServiceDetail.styles";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [relatedServices, setRelatedServices] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundService = servicesData.find((s) => s.id === parseInt(id));

    if (foundService) {
      setService(foundService);
      // Get 3 random related services (excluding current)
      const related = servicesData
        .filter((s) => s.id !== parseInt(id))
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setRelatedServices(related);
    }
  }, [id]);

  const handleBack = () => {
    navigate("/services");
  };

  const handleBookNow = () => {
    setIsModalOpen(true);
  };

  const handleViewService = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  if (!service) {
    return (
      <>
        <Header />
        <ServiceDetailWrapper>
          <ServiceDetailContainer>
            <p
              style={{
                textAlign: "center",
                padding: "50px 0",
                fontSize: "18px",
              }}
            >
              Service not found
            </p>
          </ServiceDetailContainer>
        </ServiceDetailWrapper>
        <Footer />
      </>
    );
  }

  return (
    <PageTransition>
      <Header />
      <ServiceDetailWrapper>
        <ServiceDetailContainer>
          <BackButton onClick={handleBack}>
            <span>←</span> Back to Services
          </BackButton>

          <ServiceHero>
            <ServiceHeroImage src={service.image} alt={service.title} />
            <ServiceHeroOverlay />
            <ServiceHeroContent>
              <ServiceMainTitle>{service.title}</ServiceMainTitle>
              <ServiceMetaInfo>
                <MetaItem>
                  <MetaIcon>⏱️</MetaIcon>
                  <MetaText>{service.duration}</MetaText>
                </MetaItem>
                <MetaItem>
                  <MetaIcon>💰</MetaIcon>
                  <MetaText>{service.price}</MetaText>
                </MetaItem>
              </ServiceMetaInfo>
            </ServiceHeroContent>
          </ServiceHero>

          <ContentGrid>
            <LeftColumn>
              <Section $dark>
                <SectionTitle $dark>About This Service</SectionTitle>
                <SectionDescription $dark>{service.description}</SectionDescription>
                <SectionDescription $dark style={{ marginTop: "15px" }}>
                  {service.detailedDescription}
                </SectionDescription>
              </Section>

              <Section $dark>
                <SectionTitle $dark>What's Included</SectionTitle>
                <KeyPointsGrid>
                  {service.keyPoints.map((point, index) => (
                    <KeyPointCard key={index}>
                      <KeyPointIcon>✓</KeyPointIcon>
                      <KeyPointText>{point}</KeyPointText>
                    </KeyPointCard>
                  ))}
                </KeyPointsGrid>
              </Section>

              {service.review && (
                <Section $dark>
                  <SectionTitle $dark>Customer Review</SectionTitle>
                  <ReviewCard>
                    <QuoteIcon>"</QuoteIcon>
                    <ReviewText>{service.review}</ReviewText>
                    <ReviewAuthor>— {service.reviewAuthor}</ReviewAuthor>
                  </ReviewCard>
                </Section>
              )}
            </LeftColumn>

            <RightColumn>
              <PriceCard>
                <PriceLabel>Service Price</PriceLabel>
                <PriceAmount>{service.price}</PriceAmount>
                <SectionDescription
                  style={{ marginTop: "15px", fontSize: "14px" }}
                >
                  Duration: {service.duration}
                </SectionDescription>
                <BookNowButton onClick={handleBookNow}>
                  Book This Service
                </BookNowButton>
              </PriceCard>
            </RightColumn>
          </ContentGrid>

          {relatedServices.length > 0 && (
            <RelatedServices>
              <RelatedTitle>You May Also Like</RelatedTitle>
              <RelatedGrid>
                {relatedServices.map((relatedService) => (
                  <RelatedServiceCard key={relatedService.id}>
                    <RelatedServiceImage
                      src={relatedService.image}
                      alt={relatedService.title}
                    />
                    <RelatedServiceTitle>
                      {relatedService.title}
                    </RelatedServiceTitle>
                    <ViewButton
                      onClick={() => handleViewService(relatedService.id)}
                    >
                      View Details
                    </ViewButton>
                  </RelatedServiceCard>
                ))}
              </RelatedGrid>
            </RelatedServices>
          )}
        </ServiceDetailContainer>
      </ServiceDetailWrapper>

      <Contact
        carImage={process.env.PUBLIC_URL + "/detailing-coating-car.jpg"}
      />
      <Footer />

      {isModalOpen && (
        <BookingModal service={service} onClose={() => setIsModalOpen(false)} />
      )}
    </PageTransition>
  );
};

export default ServiceDetail;
