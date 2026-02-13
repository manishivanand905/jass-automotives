import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productService } from "../../../services/productService";
import { PageTransition } from "../../../components/AnimatedWrapper";
import ProductBookingModal from "../../../components/ProductBookingModal/ProductBookingModal";
import Header from "../../../components/Header/Header";
import Contact from "../../../components/Contact/Contact";
import Footer from "../../../components/Footer/Footer";
import {
  ProductDetailWrapper,
  ProductDetailContainer,
  BackButton,
  ProductHero,
  ProductImage,
  ProductInfo,
  ProductBrand,
  ProductName,
  ProductPrice,
  ProductDescription,
  Section,
  SectionTitle,
  SpecsGrid,
  SpecItem,
  SpecLabel,
  SpecValue,
  FeaturesList,
  FeatureItem,
  AddonsSection,
  AddonCard,
  AddonHeader,
  AddonTitle,
  AddonPrice,
  AddonDescription,
  AddonIncluded,
  AddonCheckbox,
  ApplicationSection,
  ApplicationOptions,
  ApplicationOption,
  RadioInput,
  RadioLabel,
  BookingSection,
  TotalPrice,
  BookButton,
} from "./ProductDetail.styles";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [applicationType, setApplicationType] = useState("store");
  const [selectedSpecs, setSelectedSpecs] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchProduct = async () => {
    try {
      const data = await productService.getProductById(id);
      
      if (typeof data.specOptions === 'string') {
        data.specOptions = JSON.parse(data.specOptions);
      }
      
      setProduct(data);
      if (data?.specOptions) {
        const defaultSpecs = {};
        Object.keys(data.specOptions).forEach((key) => {
          if (Array.isArray(data.specOptions[key])) {
            const zeroOption = data.specOptions[key].find(
              (opt) => opt.priceModifier === 0,
            );
            defaultSpecs[key] = zeroOption
              ? zeroOption.value
              : data.specifications[key];
          }
        });
        setSelectedSpecs(defaultSpecs);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  if (loading || !product) {
    return (
      <>
        <Header />
        <ProductDetailWrapper>
          <ProductDetailContainer>
            <p
              style={{ textAlign: "center", padding: "50px 0", color: "#fff" }}
            >
              {loading ? "Loading..." : "Product not found"}
            </p>
          </ProductDetailContainer>
        </ProductDetailWrapper>
        <Footer />
      </>
    );
  }

  const toggleAddon = (addonId) => {
    setSelectedAddons((prev) => {
      const newSelection = prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId];
      console.log("Selected addons:", newSelection);
      return newSelection;
    });
  };

  const getAddonId = (addon) =>
    addon._id || addon.id || `${product.id}-${addon.title}`;

  const getUniqueAddons = (addons) => {
    if (!Array.isArray(addons)) return [];
    const seen = new Set();
    return addons.filter((addon) => {
      const addonId = getAddonId(addon);
      if (seen.has(addonId)) return false;
      seen.add(addonId);
      return true;
    });
  };

  const calculateTotal = () => {
    if (!product) return "₹0";

    const basePrice = parseInt(product.price.replace(/[₹,]/g, ""));

    let specsTotal = 0;
    if (product.specOptions) {
      Object.keys(product.specOptions).forEach((key) => {
        if (Array.isArray(product.specOptions[key])) {
          const option = product.specOptions[key].find(
            (opt) => opt.value === selectedSpecs[key],
          );
          if (option && option.priceModifier) {
            specsTotal += parseInt(option.priceModifier) || 0;
          }
        }
      });
    }

    const uniqueAddons = getUniqueAddons(product.addons);
    const addonsTotal = uniqueAddons
      .filter((addon) => selectedAddons.includes(getAddonId(addon)))
      .reduce(
        (sum, addon) => sum + parseInt(addon.price.replace(/[₹,]/g, "")),
        0,
      );
    const applicationFee = applicationType === "store" ? 20000 : 0;
    return `₹${(basePrice + specsTotal + addonsTotal + applicationFee).toLocaleString("en-IN")}`;
  };

  return (
    <PageTransition>
      <Header />
      <ProductDetailWrapper>
        <ProductDetailContainer>
          <BackButton onClick={() => navigate("/products")}>
            ← Back to Products
          </BackButton>

          <ProductHero>
            <ProductImage
              src={
                product.image?.startsWith("http")
                  ? product.image
                  : `${process.env.REACT_APP_API_URL}${product.image}`
              }
              alt={product.name}
              onError={(e) => {
                e.target.src = "/Images/products-showcase.jpg";
              }}
            />
            <ProductInfo>
              <ProductBrand>{product.brand}</ProductBrand>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>₹{parseInt(product.price).toLocaleString('en-IN')}</ProductPrice>
              <ProductDescription>
                {product.detailedDescription}
              </ProductDescription>
            </ProductInfo>
          </ProductHero>

          <Section>
            <SectionTitle>Key Features</SectionTitle>
            <FeaturesList>
              {Array.isArray(product.features) &&
                product.features.map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
            </FeaturesList>
          </Section>

          <Section>
            <SectionTitle>Specifications</SectionTitle>
            <SpecsGrid>
              {product.specifications &&
                Object.entries(product.specifications).map(([key, value]) => (
                  <SpecItem key={key}>
                    <SpecLabel>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </SpecLabel>
                    {product.specOptions && product.specOptions[key] && Array.isArray(product.specOptions[key]) && product.specOptions[key].length > 0 ? (
                      <select
                        value={selectedSpecs[key] || value}
                        onChange={(e) =>
                          setSelectedSpecs({
                            ...selectedSpecs,
                            [key]: e.target.value,
                          })
                        }
                        onFocus={() => setOpenDropdown(key)}
                        onBlur={() => setOpenDropdown(null)}
                        style={{
                          padding: "8px 28px 8px 12px",
                          backgroundColor: "#292929",
                          color: "white",
                          border: "1px solid #cc0000",
                          borderRadius: "6px",
                          fontSize: "15px",
                          fontWeight: "700",
                          cursor: "pointer",
                          outline: "none",
                          maxWidth: "100%",
                          width: "auto",
                        }}
                        className="spec-select"
                      >
                        {product.specOptions[key].map((option, idx) => (
                          <option key={idx} value={option.value}>
                            {option.value}
                            {openDropdown === key && option.priceModifier !== 0
                              ? ` (${ option.priceModifier > 0 ? "+" : ""}₹${Math.abs(option.priceModifier).toLocaleString("en-IN")})`
                              : ""}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <SpecValue>{value}</SpecValue>
                    )}
                  </SpecItem>
                ))}
            </SpecsGrid>
          </Section>

          <AddonsSection>
            <SectionTitle>Add-Ons</SectionTitle>
            {getUniqueAddons(product.addons).map((addon, index) => {
              const addonId = getAddonId(addon);
              const isSelected = selectedAddons.includes(addonId);
              return (
                <AddonCard key={addonId} $selected={isSelected}>
                  <AddonCheckbox
                    type="checkbox"
                    id={`addon-${addonId}`}
                    checked={isSelected}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleAddon(addonId);
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <AddonHeader>
                      <AddonTitle>{addon.title}</AddonTitle>
                      <AddonPrice>₹{parseInt(addon.price).toLocaleString('en-IN')}</AddonPrice>
                    </AddonHeader>
                    <AddonDescription>{addon.description}</AddonDescription>
                    <AddonIncluded>
                      {addon.included.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </AddonIncluded>
                  </div>
                </AddonCard>
              );
            })}
          </AddonsSection>

          <ApplicationSection>
            <SectionTitle>Application Location</SectionTitle>
            <ApplicationOptions>
              <ApplicationOption $selected={applicationType === "store"}>
                <RadioInput
                  type="radio"
                  name="application"
                  value="store"
                  checked={applicationType === "store"}
                  onChange={(e) => setApplicationType(e.target.value)}
                />
                <RadioLabel>
                  <div>
                    <strong>Application at Store</strong>
                    <p>Professional installation at our facility</p>
                    {applicationType === "store" && product.vendorLocation && (
                      <p
                        style={{
                          color: "#cc0000",
                          fontWeight: "600",
                          marginTop: "5px",
                        }}
                      >
                        Location: {product.vendorLocation}
                      </p>
                    )}
                  </div>
                  <span>+₹20,000</span>
                </RadioLabel>
              </ApplicationOption>
              <ApplicationOption $selected={applicationType === "select"}>
                <RadioInput
                  type="radio"
                  name="application"
                  value="select"
                  checked={applicationType === "select"}
                  onChange={(e) => setApplicationType(e.target.value)}
                />
                <RadioLabel>
                  <div>
                    <strong>Application Outside by Customer</strong>
                    <p>Self-installation or choose your own installer</p>
                  </div>
                  <span>Free</span>
                </RadioLabel>
              </ApplicationOption>
            </ApplicationOptions>
          </ApplicationSection>

          <BookingSection>
            <TotalPrice>Total: {calculateTotal()}</TotalPrice>
            <BookButton onClick={() => {
              const token = localStorage.getItem('token');
              if (!token) {
                alert('Please login to book this service');
                navigate('/login');
              } else {
                setIsModalOpen(true);
              }
            }}>
              Book Now
            </BookButton>
          </BookingSection>
        </ProductDetailContainer>
      </ProductDetailWrapper>

      <style>{`
        @media (max-width: 576px) {
          .spec-select {
            font-size: 13px !important;
            padding: 6px 28px 6px 8px !important;
            max-width: calc(100% - 10px) !important;
            line-height: 1.2 !important;
          }
          .spec-select option {
            padding: 4px !important;
          }
        }
      `}</style>

      <Contact
        carImage={process.env.PUBLIC_URL + "/Images/detailing-coating-car.jpg"}
      />
      <Footer />

      {isModalOpen && (
        <ProductBookingModal
          product={product}
          totalAmount={calculateTotal()}
          selectedAddons={getUniqueAddons(product.addons)
            .filter((addon) => selectedAddons.includes(getAddonId(addon)))
            .map((addon) => addon.title)}
          applicationType={applicationType}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </PageTransition>
  );
};

export default ProductDetail;
