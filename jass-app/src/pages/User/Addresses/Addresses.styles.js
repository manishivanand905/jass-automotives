import styled from 'styled-components';

export const AddressesWrapper = styled.div`
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
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const AddButton = styled.button`
  padding: 12px 24px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b30000;
  }

  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 13px;
  }
`;

export const AddressesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const AddressCard = styled.div`
  background-color: #3a3a3a;
  border-radius: 12px;
  padding: 25px;
  border: 2px solid ${props => props.$isDefault ? '#cc0000' : 'transparent'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(204, 0, 0, 0.2);
  }
`;

export const AddressType = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #4a4a4a;
`;

export const AddressDetails = styled.div`
  margin-bottom: 20px;
`;

export const AddressName = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const AddressText = styled.div`
  color: #aaa;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 4px;
`;

export const AddressActions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ActionButton = styled.button`
  padding: 8px 16px;
  background-color: ${props => props.$danger ? '#dc3545' : 'transparent'};
  color: ${props => props.$danger ? 'white' : '#cc0000'};
  border: 1px solid ${props => props.$danger ? '#dc3545' : '#cc0000'};
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.$danger ? '#c82333' : '#cc0000'};
    color: white;
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
  max-width: 600px;

  @media (max-width: 768px) {
    width: 95%;
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
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
    max-height: 65vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #4a4a4a;
  border-radius: 6px;
  font-size: 14px;
  background-color: #3a3a3a;
  color: white;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #cc0000;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #4a4a4a;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
  background-color: #3a3a3a;
  color: white;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #cc0000;
  }
`;

export const Select = styled.select`
  padding: 12px;
  border: 1px solid #4a4a4a;
  border-radius: 6px;
  font-size: 14px;
  background-color: #3a3a3a;
  color: white;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #cc0000;
  }

  option {
    background-color: #3a3a3a;
    color: white;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SubmitButton = styled.button`
  flex: 1;
  padding: 14px 24px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b30000;
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 14px 24px;
  background-color: transparent;
  color: #aaa;
  border: 1px solid #4a4a4a;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3a3a3a;
    border-color: #666;
    color: white;
  }
`;
