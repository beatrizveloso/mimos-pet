import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage"; 
import CategoriesPage from "../pages/categoriespage/CategoriesPage"; 
import LoginPage from "../pages/loginpage/LoginPage"; 
import ProductPage from "../pages/productpage/ProductPage"; 
import CartPage from "../pages/cartpage/CartPage"; 
import ConhecimentosPage from "../pages/conhecimentospage/ConhecimentosPage";  
import OtherProfilePage from "../pages/otherprofilepage/OtherProfilePage";
import ProfilePage from "../pages/profilepage/ProfilePage";
import ReviewPage from "../pages/reviewpage/ReviewPage";
import PagamentoPage from "../pages/pagamentopage/PagamentoPage";
import AprovadoPage from "../pages/aprovadopage/AprovadoPage";
import ScrollToTop from "./ScrollToTop";
import PoliticasPage from "../pages/termospage/PoliticasPage";
import TermosPage from "../pages/termospage/TermosPage";

const AppRoutes = () => { 
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página inicial */}
        <Route path="/categorias" element={<CategoriesPage />} /> {/* Página Categorias */}
        <Route path="/login" element={<LoginPage />} /> {/* Página de Login */}
        <Route path="/produtos/:id" element={<ProductPage />} /> {/* Página de Produtos */}
        <Route path="/carrinho" element={<CartPage />} /> {/* Página de Carrinho */}
        <Route path="/conhecimentos/:id" element={<ConhecimentosPage />} /> {/* Página de Conhecimentos */}
        <Route path="/other-profile" element={<OtherProfilePage />} /> {/* Página de Perfil */}
        <Route path="/profile" element={<ProfilePage />} /> {/* Página de Perfil alterável */}
        <Route path="/review" element={<ReviewPage />} /> {/* Página de Avaliações */}
        <Route path="/pagamento" element={<PagamentoPage />} /> {/* Página de Pagamento */}
        <Route path="/aprovado" element={<AprovadoPage />} /> {/* Página de Pagamento Aprovado */}
        <Route path="/politica-de-privacidade" element={<PoliticasPage />} />
        <Route path="/termos-de-servico" element={<TermosPage />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
