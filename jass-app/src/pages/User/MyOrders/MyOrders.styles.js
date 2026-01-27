import styled from 'styled-components';

export const OrdersWrapper = styled.div`
  min-height: 100vh;
  background-color: #292929;
  padding: 60px 20px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  color: white;
  font-size: 36px;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

export const OrdersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const OrderCard = styled.div`
  background-color: #3a3a3a;
  border-radius: 12px;
  padding: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(204, 0, 0, 0.3);
  }
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const OrderId = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

export const OrderDate = styled.div`
  color: #aaa;
  font-size: 14px;
`;

export const OrderStatus = styled.span`
  display: inline-block;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 15px;
  background-color: ${props => 
    props.$status === 'Completed' ? '#28a745' :
    props.$status === 'Confirmed' ? '#17a2b8' :
    props.$status === 'Pending' ? '#ffc107' :
    props.$status === 'Cancelled' ? '#dc3545' : '#6c757d'
  };
  color: white;
`;

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const OrderService = styled.h3`
  color: white;
  font-size: 20px;
  margin: 0;
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailLabel = styled.span`
  color: #aaa;
  font-size: 14px;
`;

export const DetailValue = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

export const ViewButton = styled.button`
  padding: 12px 24px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #b30000;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: white;

  h3 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    color: #aaa;
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  width: 90%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 95%;
    max-height: 85vh;
  }
`;

export const ModalContent = styled.div`
  background-color: #3a3a3a;
  border-radius: 12px;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  background-color: #3a3a3a;
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #cc0000;
`;

export const ModalTitle = styled.h2`
  color: white;
  font-size: 20px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    color: #cc0000;
  }
`;

export const ModalBody = styled.div`
  padding: 30px 25px;
  background-color: #292929;
  max-height: 70vh;
  overflow-y: auto;

  /* Hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
    max-height: 65vh;
  }
`;

export const ModalSection = styled.div`
  margin-bottom: 25px;
  padding: 20px;
  background-color: #3a3a3a;
  border-radius: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  color: white;
  font-size: 16px;
  margin: 0 0 15px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #cc0000;
  font-weight: 700;
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
