import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage"; 
import CategoriesPage from "../pages/categoriespage/CategoriesPage"; 
import LoginPage from "../pages/loginpage/LoginPage"; 
import ProductDetail from "../pages/productsdetail/ProductDetail"; 

const AppRoutes = () => { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página inicial */}
        <Route path="/categorias" element={<CategoriesPage />} /> {/* Página Categorias */}
        <Route path="/login" element={<LoginPage />} /> {/* Página de Login */}
        <Route path="/produtos/:id" element={<ProductDetail />} /> {/* Página de Produtos */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes; 
