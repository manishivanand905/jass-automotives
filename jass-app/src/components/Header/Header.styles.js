import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #000000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 998;
  margin: 0;
  padding: 0;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 10px 0;
    justify-content: space-between;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: 10px;
  padding-left: 30px;
  line-height: 0;
  text-decoration: none;
  cursor: pointer;

  img {
    height: 50px;
    width: auto;
    margin: 0;
    padding: 0;
    display: block;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.heading};
    margin: 0;
    padding: 0;

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 10px 0;
    padding-left: 0;

    img {
      height: 30px;
    }

    h1 {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
  }
`;

export const Nav = styled.nav`
  margin-left: auto;
  padding-right: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.sm};
    transition: color ${({ theme }) => theme.transitions.normal};
    position: relative;
    padding: 0;
    margin: 0;

    &:hover {
      color: #cc0000;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #cc0000;
      transition: width ${({ theme }) => theme.transitions.normal};
    }

    &:hover::after {
      width: 100%;
    }

    &.active {
      color: #cc0000;

      &::after {
        width: 100%;
      }
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.heading};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    padding-right: 20px;
    color: #ffffff;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transition: right ${({ theme }) => theme.transitions.normal};
  z-index: 1001;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;

  h2 {
    font-size: 20px;
    color: #1a1a1a;
    margin: 0;

    span {
      color: #cc0000;
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #1a1a1a;
  transition: color 0.3s ease;

  &:hover {
    color: #cc0000;
  }
`;

export const MobileNavList = styled.ul`
  padding: 20px 0;
  list-style: none;
  margin: 0;
`;

export const MobileNavItem = styled.li`
  a {
    display: block;
    padding: 16px 24px;
    text-decoration: none;
    color: #1a1a1a;
    font-weight: 500;
    font-size: 16px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #f5f5f5;
      color: #cc0000;
    }

    &.active {
      background-color: #f5f5f5;
      color: #cc0000;
      border-left: 3px solid #cc0000;
    }
  }
`;

export const Overlay = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const BookButton = styled.a`
  padding: 10px 20px;
  background-color: #cc0000;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  border-radius: 0px;
  height: 38px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #ff4444;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
