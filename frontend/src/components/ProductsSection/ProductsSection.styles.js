import styled from "styled-components";

export const ProductsSectionWrapper = styled.section`
  width: 100%;
  background-color: #292929;
  padding: 80px 0;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  filter: blur(${(props) => (props.$isVisible ? "0px" : "10px")});
  transform: translateY(${(props) => (props.$isVisible ? "0" : "30px")});
  transition:
    opacity 0.8s ease-out,
    filter 0.8s ease-out,
    transform 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 60px 0;
    min-height: 80vh;
    display: flex;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 40px;
    justify-items: center;
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
    font-size: 28px;
    text-align: center;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const ProductsDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #ccc;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 1.6;
    text-align: center;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const ProductsImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;

  @media (max-width: 768px) {
    height: 250px;
    border-radius: 8px;
    max-width: 400px;
  }

  @media (max-width: 576px) {
    height: 200px;
    max-width: 350px;
  }
`;

export const ViewProductsButton = styled.button`
  padding: 14px 40px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0;
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #b30000;
    transform: translateY(-2px);
  }

  @media (max-width: 968px) {
    align-self: center;
    margin-left: 0;
  }

  @media (max-width: 576px) {
    width: auto;
    padding: 12px 30px;
    font-size: 15px;
  }
`;
