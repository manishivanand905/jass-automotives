import styled from 'styled-components';

export const ProductDetailWrapper = styled.div`
  width: 100%;
  background-color: #292929;
  min-height: 100vh;
  padding: 80px 0;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const ProductDetailContainer = styled.div`
  max-width: 1200px;
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

export const BackButton = styled.button`
  background: transparent;
  color: #cc0000;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 30px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0000;
  }
`;

export const ProductHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 576px) {
    height: 250px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductBrand = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #cc0000;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
`;

export const ProductName = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: white;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 576px) {
    font-size: 26px;
  }
`;

export const ProductPrice = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #cc0000;
  margin-bottom: 25px;

  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #ccc;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const Section = styled.div`
  background-color: #3a3a3a;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 576px) {
    padding: 25px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin: 0 0 25px 0;
  padding-bottom: 15px;
  border-bottom: 2px solid #cc0000;

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #292929;
  border-radius: 8px;

  @media (max-width: 576px) {
    padding: 15px 20px 15px 15px;
  }
`;

export const SpecLabel = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #aaa;
`;

export const SpecValue = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: white;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureItem = styled.li`
  font-size: 15px;
  color: #ccc;
  padding-left: 25px;
  position: relative;

  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #cc0000;
    font-weight: 700;
  }
`;

export const AddonsSection = styled.div`
  margin-bottom: 40px;
`;

export const AddonCard = styled.div`
  background-color: ${props => props.$selected ? '#3a3a3a' : '#2a2a2a'};
  border: 2px solid ${props => props.$selected ? '#cc0000' : 'transparent'};
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #cc0000;
  }

  @media (max-width: 576px) {
    padding: 20px;
    gap: 15px;
  }
`;

export const AddonCheckbox = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
  accent-color: #cc0000;
  flex-shrink: 0;
  margin-top: 5px;
`;

export const AddonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  gap: 15px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

export const AddonTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const AddonPrice = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #cc0000;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

export const AddonDescription = styled.p`
  font-size: 15px;
  color: #ccc;
  margin: 0 0 15px 0;
`;

export const AddonIncluded = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  li {
    font-size: 14px;
    color: #aaa;
    padding-left: 20px;
    position: relative;

    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: #cc0000;
    }
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const BookingSection = styled.div`
  background-color: #3a3a3a;
  border-radius: 12px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 25px;
    gap: 20px;
  }
`;

export const TotalPrice = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: white;

  @media (max-width: 576px) {
    font-size: 26px;
  }
`;

export const BookButton = styled.button`
  padding: 16px 60px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b30000;
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    width: 100%;
    padding: 14px;
    font-size: 16px;
  }
`;

export const ApplicationSection = styled.div`
  margin-bottom: 40px;
`;

export const ApplicationOptions = styled.div`
  display: grid;
  gap: 20px;
`;

export const ApplicationOption = styled.div`
  background-color: ${props => props.$selected ? '#3a3a3a' : '#2a2a2a'};
  border: 2px solid ${props => props.$selected ? '#cc0000' : 'transparent'};
  border-radius: 12px;
  padding: 25px;
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #cc0000;
  }

  @media (max-width: 576px) {
    padding: 20px;
  }
`;

export const RadioInput = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
  accent-color: #cc0000;
  flex-shrink: 0;
`;

export const RadioLabel = styled.label`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 20px;

  strong {
    font-size: 18px;
    color: white;
    display: block;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #aaa;
    margin: 0;
  }

  span {
    font-size: 20px;
    font-weight: 700;
    color: #cc0000;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    strong {
      font-size: 16px;
    }

    span {
      font-size: 18px;
    }
  }
`;
