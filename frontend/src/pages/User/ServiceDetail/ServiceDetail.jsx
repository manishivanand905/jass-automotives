import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { serviceService } from "../../../services/serviceService";
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
    fetchService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchService = async () => {
    try {
      const data = await serviceService.getServiceById(id);
      setService(data);
      
      const allServices = await serviceService.getServices();
      const related = allServices
        .filter((s) => s._id !== id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setRelatedServices(related);
    } catch (error) {
      console.error('Error fetching service:', error);
    }
  };

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
            <ServiceHeroImage 
              src={service.image?.startsWith('http') ? service.image : `${process.env.REACT_APP_API_URL}${service.image}`} 
              alt={service.title}
              onError={(e) => { e.target.src = '/Images/repair.jpg'; }}
            />
            <ServiceHeroOverlay />
            <ServiceHeroContent>
              <ServiceMainTitle>{service.title}</ServiceMainTitle>
              <ServiceMetaInfo>
                <MetaItem>
                  <MetaIcon>⏱️</MetaIcon>
                  <MetaText>{service.duration || 'Contact for details'}</MetaText>
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
                <SectionDescription $dark>
                  {service.description}
                </SectionDescription>
              </Section>

              {service.keyPoints && service.keyPoints.length > 0 && (
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
              )}

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
                {service.duration && (
                  <SectionDescription
                    style={{ marginTop: "15px", fontSize: "14px" }}
                  >
                    Duration: {service.duration}
                  </SectionDescription>
                )}
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
                  <RelatedServiceCard key={relatedService._id}>
                    <RelatedServiceImage
                      src={relatedService.image?.startsWith('http') ? relatedService.image : `${process.env.REACT_APP_API_URL}${relatedService.image}`}
                      alt={relatedService.title}
                      onError={(e) => { e.target.src = '/Images/repair.jpg'; }}
                    />
                    <RelatedServiceTitle>
                      {relatedService.title}
                    </RelatedServiceTitle>
                    <ViewButton
                      onClick={() => handleViewService(relatedService._id)}
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
        carImage={process.env.PUBLIC_URL + "/Images/detailing-coating-car.jpg"}
      />
      <Footer />

      {isModalOpen && (
        <BookingModal service={service} onClose={() => setIsModalOpen(false)} />
      )}
    </PageTransition>
  );
};

export default ServiceDetail;
