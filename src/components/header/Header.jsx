import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../header/Header.css";
import SearchSection from "../input/SearchSection";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState(""); 

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <header>
            <nav id="navbar">
                <ul id="nav_list">
                    <li className="nav-item">
                        <Link to="/">
                            <img
                                src="images/mimo's-pet-logo.svg"
                                alt="Logo de um gato e um cachorro se olhando com um coração no meio"
                            />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">
                            <p>Início</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categorias">
                            <p>Categorias</p>
                        </Link>
                        <Link
                            to="/"
                            onClick={(e) => {
                                e.preventDefault();
                                const section = document.getElementById("sobre-nos");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            <p>Sobre Nós</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            onClick={(e) => {
                                e.preventDefault();
                                const section = document.getElementById("footer");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            <p>Contato</p>
                        </Link>
                    </li>
                </ul>
                <button id="mobile_btn">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </nav>

            <div id="mobile_menu">
                <ul id="mobile_nav_list">
                    <li className="nav-item">
                        <a href="#hd">Início</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Categorias</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Sobre nós</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </div>

            <section className="results">
                <SearchSection /> 
            </section>

            <div className="auth-cart-container">
                <button className="cart-btn">
                    <FaShoppingCart className="cart-icon" />
                </button>
                <Link to="/login">
                    <button className="login-btn">
                        <p>Login</p>
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
