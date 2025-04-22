import "./AprovadoPage.css";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import PagamentoAprovado from "../../components/pagamentoaprovado/PagamentoAprovado";
import Cards from "../../components/card/Cards.jsx";
import Footer from "../../components/footer/Footer";

const AprovadoPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='aprovado-page-container'>
    <Header />
    <PagamentoAprovado />
    <h3 style={{ textAlign: "center" }}>Explore Mais Produtos:</h3>
    <Cards searchTerm={searchTerm} limit={4} />
    <Footer />
  </div>
  );
};

export default AprovadoPage;
