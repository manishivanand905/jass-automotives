import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

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
import AdminLogin from "./pages/Admin/Login";
import VendorLogin from "./pages/Vendor/Login";
import AdminDashboard from "./pages/Admin/Dashboard";
import AddVendor from "./pages/Admin/AddVendor";
import EditVendor from "./pages/Admin/EditVendor";
import AdminAddProduct from "./pages/Admin/AddProduct";
import AdminEditProduct from "./pages/Admin/EditProduct";
import VendorDashboard from "./pages/Vendor/VendorDashboard";
import AddService from "./pages/Vendor/AddService";
import AddProduct from "./pages/Vendor/AddProduct";
import EditService from "./pages/Vendor/EditService";
import EditProduct from "./pages/Vendor/EditProduct";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route
            path="/contact"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <ContactPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/book-service"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <BookService />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-orders"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <MyOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addresses"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <Addresses />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/vendor/login" element={<VendorLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/add-vendor"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AddVendor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/edit-vendor/:id"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <EditVendor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/add-product"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminAddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/edit-product/:id"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminEditProduct />
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
          <Route
            path="/vendor/add-service"
            element={
              <ProtectedRoute allowedRoles={["vendor"]}>
                <AddService />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vendor/add-product"
            element={
              <ProtectedRoute allowedRoles={["vendor"]}>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vendor/edit-service/:id"
            element={
              <ProtectedRoute allowedRoles={["vendor"]}>
                <EditService />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vendor/edit-product/:id"
            element={
              <ProtectedRoute allowedRoles={["vendor"]}>
                <EditProduct />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
