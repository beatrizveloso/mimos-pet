import React from "react";
import { FiArrowRight } from "react-icons/fi"; 
import "../produtos/Produtos.css";

const Produtos = () => {
    return (
        <div className="align-products">
            <div className="products-text">
                <p>Explore nossa seleção e encontre tudo para o seu pet</p>
                <h1>Nossos produtos:</h1>
            </div>
            <div className="products-button">
                <button className="custom-button">
                    <p>Ver mais</p> 
                    <FiArrowRight className="arrow-icon" />
                </button>
            </div>
        </div>
    );
};

export default Produtos;
