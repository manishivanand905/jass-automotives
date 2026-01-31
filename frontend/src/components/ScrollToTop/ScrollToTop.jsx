import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.$visible ? '1' : '0'};
  visibility: ${props => props.$visible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(204, 0, 0, 0.3);

  &:hover {
    background-color: #b30000;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(204, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 18px;
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollButton $visible={visible} onClick={scrollToTop}>
      <FaArrowUp />
    </ScrollButton>
  );
};

export default ScrollToTop;
