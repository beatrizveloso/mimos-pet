import './HomePage.css';
import React from "react";
import Header from "../../components/header/Header.jsx";
import Home from '../../components/home/Home.jsx';
import Produtos from '../../components/produtos/Produtos.jsx';
import Cards from '../../components/card/Cards.jsx';
// import Apoiadores from '../../components/apoiadores/Apoiadores.jsx';
// import Banner from '../../components/banner/Banner.jsx';
// import Conhecimentos from '../../components/conhecimentos/Conhecimentos.jsx';
// import Footer from '../../components/footer/Footer.jsx';

const HomePage = () => {
  return (
    <div className='home-container'>
      <Header />
      <Home />
      <Produtos />
      <Cards />
      {/* <Apoiadores />
      <Banner />
      <Conhecimentos />
      <Footer /> */}
    </div>
  );
};

export default HomePage;

