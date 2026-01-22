import React from "react";
import { useNavigate } from "react-router-dom";
import { productsData } from "../../data/productsData";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
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
    <>
      <Header />
      <ProductsWrapper>
        <ProductsContainer>
          <ProductsHeader>
            <ProductsTitle>Premium Protection Products</ProductsTitle>
          </ProductsHeader>

          <CategorySection>
            <CategoryTitle>Paint Protection Film (PPF)</CategoryTitle>
            <ProductsGrid>
              {ppfProducts.map((product) => (
                <ProductCard key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
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
              ))}
            </ProductsGrid>
          </CategorySection>

          <CategorySection>
            <CategoryTitle>Ceramic Coating</CategoryTitle>
            <ProductsGrid>
              {coatingProducts.map((product) => (
                <ProductCard key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
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
              ))}
            </ProductsGrid>
          </CategorySection>
        </ProductsContainer>
      </ProductsWrapper>
      <Contact
        carImage={process.env.PUBLIC_URL + "/detailing-coating-car.jpg"}
      />
      <Footer />
    </>
  );
};

export default Products;
