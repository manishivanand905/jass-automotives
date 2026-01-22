import React from 'react';
import { useNavigate } from 'react-router-dom';
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

  return (
    <ProductsSectionWrapper>
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
        </ViewProductsButton>
      </ProductsContainer>
    </ProductsSectionWrapper>
  );
};

export default ProductsSection;
