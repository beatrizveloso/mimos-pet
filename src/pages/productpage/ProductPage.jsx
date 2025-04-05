import "./ProductPage.css"; 
import React, { useState } from "react";
import Header from "../../components/header/Header.jsx";
import ProductDetail from "../../components/productsdetail/ProductDetail.jsx";
import Cards from "../../components/card/Cards.jsx";
import Footer from '../../components/footer/Footer.jsx';

const ProductPage = () => {
      const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="productpage-container">
            <Header/> 
            <ProductDetail/>
            <Cards searchTerm={searchTerm} limit={4} />
            <Footer />
        </div>
    );
};

export default ProductPage;
