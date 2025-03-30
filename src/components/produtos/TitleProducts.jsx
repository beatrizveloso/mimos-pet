import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi"; 
import "../produtos/TitleProducts.css";

const TitleProducts = () => {
    return (
        <div className="align-products">
            <div className="products-text">
                <p>Explore nossa seleção e encontre tudo para o seu pet</p>
                <h1>Nossos produtos:</h1>
            </div>
            <div className="products-button">
                <Link to="/categorias" className="link-button">
                    <button className="custom-button">
                        <p>Ver mais</p> 
                        <FiArrowRight className="arrow-icon" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TitleProducts;
