import React from "react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  ServicesWrapper,
  Container,
  TopSection,
  LeftContent,
  Title,
  RightContent,
  Description,
  ViewAllLink,
  CategoriesGrid,
  CategoryCard,
  CategoryImage,
  CategoryContent,
  CategoryTitle,
  CategoryDescription,
  CategoryReview,
  HoverButton,
} from "./Services.styles";
import { categoriesData } from "../../data/categoriesData";

const Services = () => {
  const navigate = useNavigate();
  const [ref, isVisible] = useScrollAnimation();

  const handleCategoryClick = (categoryName) => {
    navigate(`/services?category=${categoryName}`);
  };

  return (
    <ServicesWrapper ref={ref} $isVisible={isVisible}>
      <Container>
        <TopSection>
          <LeftContent>
            <Title>
              Top-Tier Services
              <br />
              for Your Vehicle
            </Title>
          </LeftContent>
          <RightContent>
            <Description>
              From regular maintenance to complex repairs, Jass Automotives is
              your one-stop auto care partner.
            </Description>
            <ViewAllLink href="/services">
              View All Services
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </ViewAllLink>
          </RightContent>
        </TopSection>

        <CategoriesGrid>
          {categoriesData.map((category) => (
            <CategoryCard 
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
            >
              <CategoryImage
                src={process.env.PUBLIC_URL + category.image}
                alt={category.title}
              />
              <CategoryContent>
                <CategoryTitle>{category.title}</CategoryTitle>
                <CategoryDescription>{category.description}</CategoryDescription>
                <CategoryReview>
                  "{category.review}" — {category.reviewAuthor}
                </CategoryReview>
              </CategoryContent>
              <HoverButton>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </HoverButton>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </Container>
    </ServicesWrapper>
  );
};

export default Services;
