import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  HeaderWrapper,
  HeaderContainer,
  Logo,
  Nav,
  NavList,
  NavItem,
  BookButton,
  MobileMenuButton,
  MobileMenu,
  MobileMenuHeader,
  CloseButton,
  MobileNavList,
  MobileNavItem,
  Overlay,
} from "./Header.styles";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Set active link based on current path
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") setActiveLink("home");
    else if (path === "/services" || path.startsWith("/services/")) setActiveLink("services");
    else if (path === "/contact") setActiveLink("contact");
    else setActiveLink(""); // No active link for other pages
  }, []);

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "services", label: "Services", path: "/services" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    closeMobileMenu();
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Logo>
            <img src="/jass-logo.png" alt="Jass Automotives Logo" />
            {/* <h1>
              Jass <span>Automotives</span>
            </h1> */}
          </Logo>

          {/* Desktop Navigation */}
          <Nav>
            <NavList>
              {navLinks.map((link) => (
                <NavItem key={link.id}>
                  <a
                    href={link.path}
                    className={activeLink === link.id ? "active" : ""}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    {link.label}
                  </a>
                </NavItem>
              ))}
              <BookButton href="/book-service">Book a service</BookButton>
            </NavList>
          </Nav>

          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <Menu size={28} />
          </MobileMenuButton>
        </HeaderContainer>
      </HeaderWrapper>

      {/* Mobile Menu Overlay */}
      <Overlay $isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />

      {/* Mobile Menu */}
      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileMenuHeader>
          <h2>
            Jass <span>Automotives</span>
          </h2>
          <CloseButton onClick={closeMobileMenu} aria-label="Close Menu">
            <X size={28} />
          </CloseButton>
        </MobileMenuHeader>

        <MobileNavList>
          {navLinks.map((link) => (
            <MobileNavItem key={link.id}>
              <a
                href={link.path}
                className={activeLink === link.id ? "active" : ""}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </a>
            </MobileNavItem>
          ))}
        </MobileNavList>
      </MobileMenu>
    </>
  );
};

export default Header;
