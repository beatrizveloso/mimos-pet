import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../context/CartContext";
import SearchSection from "../input/SearchSection";
import LoginButton from '../loginbutton/LoginButton'; 
import "../header/Header.css";

const Header = () => {
    const { cartItems } = useContext(CartContext);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantidade, 0);

    return (
        <header>
            <nav id="navbar">
                <ul id="nav_list">
                    <li className="nav-item">
                        <Link to="/">
                            <img
                                src="/images/mimo's-pet-logo.svg"
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

            <Link to="/carrinho">
                <div className="auth-cart-container">
                    <button className="cart-btn">
                        <TiShoppingCart className="cart-icon" />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </button>
                </div>
            </Link>

            <Link to="/login">
                  <LoginButton />
            </Link>
        </header>
    );
};

export default Header;
