import React from "react";
import { useNavigate } from "react-router-dom";
import { productsData } from "../../../data/productsData";
import { PageTransition, FadeIn, StaggerContainer, StaggerItem, HoverScale } from "../../../components/AnimatedWrapper";
import Header from "../../../components/Header/Header";
import Contact from "../../../components/Contact/Contact";
import Footer from "../../../components/Footer/Footer";
import {
  ProductsWrapper,
  ProductsContainer,
  ProductsHeader,
  ProductsTitle,
  CategorySection,
  CategoryTitle,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductContent,
  ProductBrand,
  ProductName,
  ProductDescription,
  ProductPrice,
  ViewDetailsButton,
} from "./Products.styles";

const Products = () => {
  const navigate = useNavigate();
  const ppfProducts = productsData.filter(p => p.category === 'PPF');
  const coatingProducts = productsData.filter(p => p.category === 'Ceramic Coating');

  return (
    <PageTransition>
      <Header />
      <ProductsWrapper>
        <ProductsContainer>
          <ProductsHeader>
            <FadeIn delay={0.1}>
              <ProductsTitle>Premium Protection Products</ProductsTitle>
            </FadeIn>
          </ProductsHeader>

          <CategorySection>
            <FadeIn delay={0.2}>
              <CategoryTitle>Paint Protection Film (PPF)</CategoryTitle>
            </FadeIn>
            <StaggerContainer staggerDelay={0.1}>
              <ProductsGrid>
                {ppfProducts.map((product) => (
                  <StaggerItem key={product.id}>
                    <HoverScale scale={1.05}>
                      <ProductCard onClick={() => navigate(`/products/${product.id}`)}>
                        <ProductImage
                          src={process.env.PUBLIC_URL + product.image}
                          alt={`${product.name} - ${product.brand}`}
                        />
                        <ProductContent>
                          <ProductBrand>{product.brand}</ProductBrand>
                          <ProductName>{product.name}</ProductName>
                          <ProductDescription>{product.description}</ProductDescription>
                          <ProductPrice>{product.price}</ProductPrice>
                          <ViewDetailsButton>View Details</ViewDetailsButton>
                        </ProductContent>
                      </ProductCard>
                    </HoverScale>
                  </StaggerItem>
                ))}
              </ProductsGrid>
            </StaggerContainer>
          </CategorySection>

          <CategorySection>
            <FadeIn delay={0.3}>
              <CategoryTitle>Ceramic Coating</CategoryTitle>
            </FadeIn>
            <StaggerContainer staggerDelay={0.1}>
              <ProductsGrid>
                {coatingProducts.map((product) => (
                  <StaggerItem key={product.id}>
                    <HoverScale scale={1.05}>
                      <ProductCard onClick={() => navigate(`/products/${product.id}`)}>
                        <ProductImage
                          src={process.env.PUBLIC_URL + product.image}
                          alt={`${product.name} - ${product.brand}`}
                        />
                        <ProductContent>
                          <ProductBrand>{product.brand}</ProductBrand>
                          <ProductName>{product.name}</ProductName>
                          <ProductDescription>{product.description}</ProductDescription>
                          <ProductPrice>{product.price}</ProductPrice>
                          <ViewDetailsButton>View Details</ViewDetailsButton>
                        </ProductContent>
                      </ProductCard>
                    </HoverScale>
                  </StaggerItem>
                ))}
              </ProductsGrid>
            </StaggerContainer>
          </CategorySection>
        </ProductsContainer>
      </ProductsWrapper>
      <Contact
        carImage={process.env.PUBLIC_URL + "/Images/detailing-coating-car.jpg"}
      />
      <Footer />
    </PageTransition>
  );
};

export default Products;
