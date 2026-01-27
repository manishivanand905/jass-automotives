import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

import Home from "./pages/User/Home/home";
import Services from "./pages/User/Services/Services";
import ServiceDetail from "./pages/User/ServiceDetail/ServiceDetail";
import Products from "./pages/User/Products/Products";
import ProductDetail from "./pages/User/ProductDetail/ProductDetail";
import ContactPage from "./pages/User/ContactPage/ContactPage";
import BookService from "./pages/User/BookService/BookService";
import MyOrders from "./pages/User/MyOrders/MyOrders";
import Addresses from "./pages/User/Addresses/Addresses";
import Login from "./pages/Login/Login";
import AdminDashboard from "./pages/Admin/Dashboard";
import VendorDashboard from "./pages/Vendor/VendorDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-service" element={<BookService />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vendor/dashboard"
            element={
              <ProtectedRoute allowedRoles={["vendor"]}>
                <VendorDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
