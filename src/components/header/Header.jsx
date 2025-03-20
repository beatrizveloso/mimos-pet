import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";  // Importando os ícones de FontAwesome
import "../header/Header.css";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>

                    <div className="align-header">
                        <img src="images/mimo's-pet-logo.png" alt="Logo" />
                        <li><p>Início</p></li>
                        <li><p>Categorias</p></li>
                        <li><p>Sobre Nós</p></li>
                        <li><p>Contato</p></li>
                    </div>
                </ul>
            </nav>

            <div className="search-container">
                <input type="text" placeholder="Pesquisar..." />
                <FaSearch className="search-icon" />
            </div>


            <div className="auth-cart-container">

                <button className="cart-btn">
                    <FaShoppingCart className="cart-icon" />
                </button>
            </div>

            <button className="login-btn">Login</button>
        </header>
    );
};

export default Header;
