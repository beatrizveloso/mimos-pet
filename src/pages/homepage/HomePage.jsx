import './HomePage.css';
import React, { useState } from "react";
import Header from "../../components/header/Header.jsx";
import Home from '../../components/home/Home.jsx';
import TitleProducts from '../../components/produtos/TitleProducts.jsx';
import Cards from '../../components/card/Cards.jsx';
import Apoiadores from '../../components/apoiadores/Apoiadores.jsx';
import Banner from '../../components/banner/Banner.jsx';
import Conhecimentos from '../../components/conhecimentocard/Conhecimentos.jsx';
import Footer from '../../components/footer/Footer.jsx';
// import Chatbot from "../../components/chatbot/ChatBot";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className='home-container'>
      <Header onSearchChange={handleSearchChange} />
      <Home />
      <TitleProducts />
      <Cards searchTerm={searchTerm} limit={8} />
      <Apoiadores />
      <Banner />
      <Conhecimentos />
      <Footer />
      {/* <Chatbot />  */}
    </div>
  );
};

export default HomePage;
