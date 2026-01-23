import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import {
  ProductsSectionWrapper,
  ProductsContainer,
  ProductsContent,
  ProductsText,
  ProductsTitle,
  ProductsDescription,
  ProductsImage,
  ViewProductsButton
} from './ProductsSection.styles';

const ProductsSection = () => {
  const navigate = useNavigate();
  const [ref, isVisible] = useScrollAnimation();

  return (
    <ProductsSectionWrapper ref={ref} $isVisible={isVisible}>
      <ProductsContainer>
        <ProductsContent>
          <ProductsText>
            <ProductsTitle>Premium Protection Products</ProductsTitle>
            <ProductsDescription>
              Discover our exclusive range of premium automotive protection products. From industry-leading Paint Protection Films (PPF) by XPEL, 3M, and LLumar to advanced Ceramic Coatings from top brands like Kovalent and System X. Each product is carefully selected to provide your vehicle with the ultimate protection against environmental damage, scratches, and wear. Our professional-grade solutions ensure your car maintains its showroom finish for years to come.
            </ProductsDescription>
          </ProductsText>
          <ProductsImage src={process.env.PUBLIC_URL + '/products-showcase.jpg'} alt="Premium Products" />
        </ProductsContent>
        <ViewProductsButton onClick={() => navigate('/products')}>
          View Our Products
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </ViewProductsButton>
      </ProductsContainer>
    </ProductsSectionWrapper>
  );
};

export default ProductsSection;
