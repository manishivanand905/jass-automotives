import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Journey from "../../components/Journey/Journey";
import Services from "../../components/Services/Services";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import CertifiedExperts from "../../components/CertifiedExperts/CertifiedExperts";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import { HomeWrapper } from "./Home.styles";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Hero backgroundImage={process.env.PUBLIC_URL + "/hero-bg.jpg"} />
      <Journey carImage={process.env.PUBLIC_URL + "/red-car.jpg"} />
      <ProductsSection />
      <Services />
      <Testimonials />
      <CertifiedExperts
        backgroundImage={process.env.PUBLIC_URL + "/garage-bg.jpg"}
      />
      <Contact
        carImage={process.env.PUBLIC_URL + "/detailing-coating-car.jpg"}
      />
      <Footer />

      {/* Add more sections here as needed */}
      {/* <ServicesSection /> */}
      {/* <AboutSection /> */}
      {/* <TestimonialsSection /> */}
    </HomeWrapper>
  );
};

export default Home;
