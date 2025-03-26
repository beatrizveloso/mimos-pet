import "./CategoriesPage.css"; 
import React, { useState } from "react";
import Header from "../../components/header/Header.jsx";
import FilterCate from "../../components/produtos/FilterCate.jsx";
import Cards from "../../components/card/Cards.jsx";
import BannerCate from '../../components/banner/BannerCate.jsx';
import Footer from '../../components/footer/Footer.jsx';

const CategoriesPage = () => {
    const [filtro, setFiltro] = useState("Todas as categorias"); 

    return (
        <div className="categories-container">
            <Header/> 
            <BannerCate />
            <FilterCate setFiltro={setFiltro} /> 
            <Cards filtro={filtro} /> 
            <Footer />
        </div>
    );
};

export default CategoriesPage;
