import styled from "styled-components";

export const ProductsWrapper = styled.div`
  width: 100%;
  background-color: #292929;
  min-height: 100vh;
  padding: 80px 0;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const ProductsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: 1200px) {
    padding: 0 60px;
  }

  @media (max-width: 768px) {
    padding: 0 40px;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;

export const ProductsHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const ProductsTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: white;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

export const CategorySection = styled.div`
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin: 0 0 30px 0;
  padding-bottom: 15px;
  border-bottom: 3px solid #cc0000;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 25px;
  }

  @media (max-width: 576px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ProductCard = styled.div`
  background-color: #3a3a3a;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;

  @media (max-width: 576px) {
    height: 200px;
  }
`;

export const ProductContent = styled.div`
  padding: 25px;

  @media (max-width: 576px) {
    padding: 20px;
  }
`;

export const ProductBrand = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #cc0000;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

export const ProductName = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: white;
  margin: 0 0 12px 0;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #ccc;
  margin: 0 0 15px 0;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const ProductFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

export const FeatureItem = styled.li`
  font-size: 14px;
  color: #aaa;
  margin-bottom: 8px;
  padding-left: 5px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const ProductPrice = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #cc0000;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const InquiryButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b30000;
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    padding: 12px;
    font-size: 15px;
  }
`;

export const ViewDetailsButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b30000;
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    padding: 12px;
    font-size: 15px;
  }
`;
