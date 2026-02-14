import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { authService } from "../../services/authService";
import {
  HeaderWrapper,
  HeaderContainer,
  Logo,
  Nav,
  NavList,
  NavItem,
  MobileMenuButton,
  MobileMenu,
  MobileMenuHeader,
  CloseButton,
  MobileNavList,
  MobileNavItem,
  Overlay,
  AuthButton,
  ProfileDropdown,
  ProfileHeader,
  ProfileInfo,
  ProfileMenu,
  ProfileMenuItem,
  ProfileOverlay,
  HeaderSpacer,
} from "./Header.styles";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll effect for hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsHeaderVisible(false);
      } else {
        // Scrolling up or at top
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem('isAuthenticated') === 'true';
      const role = localStorage.getItem('userRole');
      setIsAuthenticated(auth);
      setUserRole(role);
      
      if (auth && role === 'user') {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      }
    };
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  // Set active link based on current path
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") setActiveLink("home");
    else if (path === "/services" || path.startsWith("/services/"))
      setActiveLink("services");
    else if (path === "/contact") setActiveLink("contact");
    else setActiveLink(""); // No active link for other pages
  }, []);

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "services", label: "Services", path: "/services" },
    { id: "products", label: "Products", path: "/products" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "book-service", label: "Book a Service", path: "/book-service", requiresAuth: true },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (linkId, requiresAuth) => {
    if (requiresAuth && (!isAuthenticated || userRole !== 'user')) {
      alert('Please login to book a service');
      navigate('/login');
      return;
    }
    setActiveLink(linkId);
    closeMobileMenu();
  };

  const handleAuthClick = () => {
    if (isAuthenticated && userRole === 'user') {
      setShowProfileDropdown(!showProfileDropdown);
      setIsMobileMenuOpen(false);
    } else if (isAuthenticated) {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userRole');
      setIsAuthenticated(false);
      setUserRole(null);
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setUserRole(null);
    setShowProfileDropdown(false);
    navigate('/');
    closeMobileMenu();
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfileDropdown && !event.target.closest('.profile-dropdown') && !event.target.closest('.auth-button')) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showProfileDropdown]);

  // Prevent body scroll when profile dropdown is open on mobile
  useEffect(() => {
    if (showProfileDropdown && window.innerWidth <= 768) {
      document.body.style.overflow = "hidden";
    } else if (!isMobileMenuOpen) {
      document.body.style.overflow = "unset";
    }
    return () => {
      if (!isMobileMenuOpen) {
        document.body.style.overflow = "unset";
      }
    };
  }, [showProfileDropdown, isMobileMenuOpen]);

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
      <HeaderWrapper $isVisible={isHeaderVisible}>
        <HeaderContainer>
          <Logo href="/">
            <img src="/Images/jass-logo.png" alt="Jass Automotives Logo" />
          </Logo>

          {/* Desktop Navigation */}
          <Nav>
            <NavList>
              {navLinks.map((link) => (
                <NavItem key={link.id}>
                  <a
                    href={link.path}
                    className={activeLink === link.id ? "active" : ""}
                    onClick={(e) => {
                      if (link.requiresAuth) {
                        e.preventDefault();
                        handleLinkClick(link.id, link.requiresAuth);
                      } else {
                        handleLinkClick(link.id);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </NavItem>
              ))}
              <AuthButton onClick={handleAuthClick} className="auth-button" title={isAuthenticated ? (userRole === 'user' ? 'Profile' : 'Logout') : 'Login'}>
                <FaUser size={18} />
              </AuthButton>
            </NavList>
          </Nav>

          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <Menu size={28} />
          </MobileMenuButton>
        </HeaderContainer>
      </HeaderWrapper>
      
      {/* Header Spacer for fixed positioning */}
      <HeaderSpacer />

      {/* Mobile Menu Overlay */}
      <Overlay $isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />

      {/* Profile Dropdown Overlay */}
      <ProfileOverlay $isOpen={showProfileDropdown} onClick={() => setShowProfileDropdown(false)} />

      {/* Profile Dropdown */}
      {isAuthenticated && userRole === 'user' && showProfileDropdown && (
        <ProfileDropdown className="profile-dropdown">
          <ProfileHeader>
            <h3>Hi, {userData.name}</h3>
            <ProfileInfo>{userData.email}</ProfileInfo>
            <ProfileInfo>{userData.phone}</ProfileInfo>
          </ProfileHeader>
          <ProfileMenu>
            <ProfileMenuItem onClick={() => { setShowProfileDropdown(false); navigate('/addresses'); }}>Addresses</ProfileMenuItem>
            <ProfileMenuItem onClick={() => { setShowProfileDropdown(false); navigate('/my-orders'); }}>My Bookings</ProfileMenuItem>
            <ProfileMenuItem onClick={() => { setShowProfileDropdown(false); }}>Download Our App</ProfileMenuItem>
            <ProfileMenuItem onClick={() => { setShowProfileDropdown(false); }}>Help and Support</ProfileMenuItem>
            <ProfileMenuItem onClick={handleLogout} style={{ color: '#cc0000', borderTop: '1px solid #e0e0e0', paddingTop: '12px', marginTop: '8px' }}>Logout</ProfileMenuItem>
          </ProfileMenu>
        </ProfileDropdown>
      )}

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
                onClick={(e) => {
                  if (link.requiresAuth) {
                    e.preventDefault();
                    handleLinkClick(link.id, link.requiresAuth);
                  } else {
                    handleLinkClick(link.id);
                  }
                }}
              >
                {link.label}
              </a>
            </MobileNavItem>
          ))}
          {isAuthenticated && userRole === 'user' && (
            <>
              <MobileNavItem>
                <button onClick={() => { closeMobileMenu(); navigate('/addresses'); }} style={{ cursor: 'pointer', background: 'none', border: 'none', width: '100%', textAlign: 'left', padding: '16px 24px', fontSize: '16px', fontWeight: '500', color: '#1a1a1a' }}>
                  Addresses
                </button>
              </MobileNavItem>
              <MobileNavItem>
                <button onClick={() => { closeMobileMenu(); navigate('/my-orders'); }} style={{ cursor: 'pointer', background: 'none', border: 'none', width: '100%', textAlign: 'left', padding: '16px 24px', fontSize: '16px', fontWeight: '500', color: '#1a1a1a' }}>
                  My Bookings
                </button>
              </MobileNavItem>
            </>
          )}
          <MobileNavItem>
            <button onClick={isAuthenticated ? handleLogout : () => { closeMobileMenu(); navigate('/login'); }} style={{ cursor: 'pointer', background: '#cc0000 !important', border: 'none', width: '140px', height: '32px', textAlign: 'center', padding: '0', fontSize: '14px', fontWeight: '600', color: '#ffffff !important', transition: 'all 0.3s ease', margin: '8px 24px' }}>
              {isAuthenticated ? 'Logout' : 'Login'}
            </button>
          </MobileNavItem>
        </MobileNavList>
      </MobileMenu>
    </>
  );
};

export default Header;
