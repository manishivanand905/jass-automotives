import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { productService } from "../../../services/productService";
import { PageTransition, FadeIn } from "../../../components/AnimatedWrapper";
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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await productService.getProducts();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const ppfProducts = products.filter(p => p.category === 'PPF');
  const coatingProducts = products.filter(p => p.category === 'Ceramic Coating');

  if (loading) {
    return (
      <>
        <Header />
        <ProductsWrapper>
          <ProductsContainer>
            <p style={{ textAlign: 'center', padding: '50px 0', color: '#fff' }}>Loading...</p>
          </ProductsContainer>
        </ProductsWrapper>
        <Footer />
      </>
    );
  }

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
            <ProductsGrid>
              {ppfProducts.map((product) => (
                <ProductCard key={product._id} onClick={() => navigate(`/products/${product._id}`)}>
                  <ProductImage
                    src={product.image?.startsWith('http') ? product.image : `${process.env.REACT_APP_API_URL}${product.image}`}
                    alt={`${product.name} - ${product.brand}`}
                    onError={(e) => { e.target.src = '/Images/products-showcase.jpg'; }}
                  />
                  <ProductContent>
                    <ProductBrand>{product.brand}</ProductBrand>
                    <ProductName>{product.name}</ProductName>
                    <ProductDescription>{product.description}</ProductDescription>
                    <ProductPrice>{product.price}</ProductPrice>
                    <ViewDetailsButton>View Details</ViewDetailsButton>
                  </ProductContent>
                </ProductCard>
              ))
              }
            </ProductsGrid>
          </CategorySection>

          <CategorySection>
            <FadeIn delay={0.3}>
              <CategoryTitle>Ceramic Coating</CategoryTitle>
            </FadeIn>
            <ProductsGrid>
              {coatingProducts.map((product) => (
                <ProductCard key={product._id} onClick={() => navigate(`/products/${product._id}`)}>
                  <ProductImage
                    src={product.image?.startsWith('http') ? product.image : `${process.env.REACT_APP_API_URL}${product.image}`}
                    alt={`${product.name} - ${product.brand}`}
                    onError={(e) => { e.target.src = '/Images/products-showcase.jpg'; }}
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
        carImage={process.env.PUBLIC_URL + "/Images/detailing-coating-car.jpg"}
      />
      <Footer />
    </PageTransition>
  );
};

export default Products;
