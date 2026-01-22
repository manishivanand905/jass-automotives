import styled from "styled-components";

export const ProductsSectionWrapper = styled.section`
  width: 100%;
  background-color: #292929;
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

export const ProductsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const ProductsText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProductsTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: white;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 576px) {
    font-size: 26px;
  }
`;

export const ProductsDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #ccc;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const ProductsImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 576px) {
    height: 250px;
  }
`;

export const ViewProductsButton = styled.button`
  padding: 14px 40px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 0px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0;
  align-self: flex-end;
  display: block;
  margin-left: auto;

  &:hover {
    background-color: #b30000;
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    width: 100%;
    margin-left: 0;
  }
`;
