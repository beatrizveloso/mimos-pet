import './HomePage.css';
import React, { useState } from "react";
import Header from "../../components/header/Header.jsx";
import Home from '../../components/home/Home.jsx';
import Produtos from '../../components/produtos/Produtos.jsx';
import Cards from '../../components/card/Cards.jsx';
import Apoiadores from '../../components/apoiadores/Apoiadores.jsx';
import Banner from '../../components/banner/Banner.jsx';
import Conhecimentos from '../../components/conhecimentos/Conhecimentos.jsx';
import Footer from '../../components/footer/Footer.jsx';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Função para atualizar o valor de pesquisa
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className='home-container'>
      <Header onSearchChange={handleSearchChange} />
      <Home />
      <Produtos />
        <Cards filtro={searchTerm} />
      <Apoiadores />
      <Banner />
      <Conhecimentos />
      <Footer />
    </div>
  );
};

export default HomePage;
