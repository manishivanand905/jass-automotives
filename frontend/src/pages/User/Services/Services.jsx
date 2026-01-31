import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { serviceService } from "../../../services/serviceService";
import { PageTransition, FadeIn } from "../../../components/AnimatedWrapper";
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
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchServices();
  }, []);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const fetchServices = async () => {
    try {
      const data = await serviceService.getServices();
      setServices(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching services:', error);
      setLoading(false);
    }
  };

  const handleBookNow = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

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

          <ServicesGrid>
            {loading ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#fff' }}>
                Loading services...
              </div>
            ) : filteredServices.length === 0 ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#fff' }}>
                No services available
              </div>
            ) : (
              filteredServices.map((service) => (
                <ServiceCard key={service._id}>
                  <ServiceImageWrapper>
                    <ServiceImage
                      src={service.image?.startsWith('http') ? service.image : `${process.env.REACT_APP_API_URL}${service.image}`}
                      alt={service.title}
                      loading="lazy"
                      onError={(e) => { e.target.src = '/Images/repair.jpg'; }}
                    />
                  </ServiceImageWrapper>

                  <ServiceContent>
                    <ServiceTitle>{service.title}</ServiceTitle>

                    <ServiceDescription>
                      {service.detailedDescription}
                    </ServiceDescription>

                    <KeyPointsLabel>Key Points:</KeyPointsLabel>
                    <KeyPointsList>
                      {Array.isArray(service.keyPoints) && service.keyPoints.map((point, index) => (
                        <KeyPointItem key={index}>{point}</KeyPointItem>
                      ))}
                    </KeyPointsList>

                    <ServiceFooter>
                      <BookButton onClick={() => handleBookNow(service._id)}>
                        View Details
                      </BookButton>
                    </ServiceFooter>
                  </ServiceContent>
                </ServiceCard>
              ))
            )}
          </ServicesGrid>
        </ServicesContainer>
      </ServicesWrapper>
      <Contact
        carImage={process.env.PUBLIC_URL + "/Images/detailing-coating-car.jpg"}
      />
      <Footer />
    </PageTransition>
  );
};

export default Services;
