import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { servicesData } from "../../../data/servicesData";
import { PageTransition, FadeIn, StaggerContainer, StaggerItem, HoverScale } from "../../../components/AnimatedWrapper";
import Header from "../../../components/Header/Header";
import Contact from "../../../components/Contact/Contact";
import Footer from "../../../components/Footer/Footer";
import {
  ServicesWrapper,
  ServicesContainer,
  ServicesHeader,
  ServicesTitle,
  CategoryFilter,
  CategoryButton,
  ServicesGrid,
  ServiceCard,
  ServiceImageWrapper,
  ServiceImage,
  ServiceContent,
  ServiceTitle,
  ServiceDescription,
  KeyPointsLabel,
  KeyPointsList,
  KeyPointItem,
  ServiceFooter,
  BookButton,
} from "./Services.styles";

const Services = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleBookNow = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const filteredServices = selectedCategory === "All" 
    ? servicesData 
    : servicesData.filter(service => service.category === selectedCategory);

  return (
    <PageTransition>
      <Header />
      <ServicesWrapper>
        <ServicesContainer>
          <ServicesHeader>
            <FadeIn delay={0.1}>
              <ServicesTitle>Our Services</ServicesTitle>
            </FadeIn>
          </ServicesHeader>

          <FadeIn delay={0.2}>
            <CategoryFilter>
              <CategoryButton 
                $active={selectedCategory === "All"}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </CategoryButton>
              <CategoryButton 
                $active={selectedCategory === "Detailing"}
                onClick={() => setSelectedCategory("Detailing")}
              >
                Detailing
              </CategoryButton>
              <CategoryButton 
                $active={selectedCategory === "Repair"}
                onClick={() => setSelectedCategory("Repair")}
              >
                Repair
              </CategoryButton>
              <CategoryButton 
                $active={selectedCategory === "Body Shop"}
                onClick={() => setSelectedCategory("Body Shop")}
              >
                Body Shop
              </CategoryButton>
            </CategoryFilter>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1}>
            <ServicesGrid>
              {filteredServices.map((service) => (
                <StaggerItem key={service.id}>
                  <HoverScale scale={1.03}>
                    <ServiceCard>
                      <ServiceImageWrapper>
                        <ServiceImage
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                        />
                      </ServiceImageWrapper>

                      <ServiceContent>
                        <ServiceTitle>{service.title}</ServiceTitle>

                        <ServiceDescription>
                          {service.detailedDescription}
                        </ServiceDescription>

                        <KeyPointsLabel>Key Points:</KeyPointsLabel>
                        <KeyPointsList>
                          {service.keyPoints.map((point, index) => (
                            <KeyPointItem key={index}>{point}</KeyPointItem>
                          ))}
                        </KeyPointsList>

                        <ServiceFooter>
                          <BookButton onClick={() => handleBookNow(service.id)}>
                            View Details
                          </BookButton>
                        </ServiceFooter>
                      </ServiceContent>
                    </ServiceCard>
                  </HoverScale>
                </StaggerItem>
              ))}
            </ServicesGrid>
          </StaggerContainer>
        </ServicesContainer>
      </ServicesWrapper>
      <Contact
        carImage={process.env.PUBLIC_URL + "/detailing-coating-car.jpg"}
      />
      <Footer />
    </PageTransition>
  );
};

export default Services;
