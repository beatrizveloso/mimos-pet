import React, { useContext, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { HiMenu } from "react-icons/hi";
import { CartContext } from "../../context/CartContext";
import SearchSection from "../input/SearchSection";
import LoginButton from '../loginbutton/LoginButton';
import "../header/Header.css";

const Header = () => {
    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantidade, 0);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header>
            <nav id="navbar">
                <div className="nav-left">
                    <Link to="/">
                        <img
                            src="/images/mimo's-pet-logo.svg"
                            alt="Logo de um gato e um cachorro se olhando com um coração no meio"
                        />
                    </Link>
                </div>

                <ul id="nav_list">
                    <li className="nav-item">
                        <Link to="/">
                            <p>Início</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categorias"><p>Categorias</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sobre-nos"><p>Sobre Nós</p></Link>
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

                <div className="nav-right">
                    <div className="mobile-only">
                        <button id="mobile_btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <HiMenu className="mobile-menu-icon" />
                        </button>
                    </div>
                    <div className="desktop-only">
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
                    </div>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div id="mobile_menu" className="mobile-menu-open">
                    <ul id="mobile_nav_list">
                        <li className="nav-item">
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categorias" onClick={() => setIsMobileMenuOpen(false)}>Categorias</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sobre-nos" onClick={() => setIsMobileMenuOpen(false)}>Sobre nós</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#footer" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/carrinho" onClick={() => setIsMobileMenuOpen(false)}>Carrinho</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                        </li>
                    </ul>
                </div>
            )}

            {isSearchOpen && (
                <div className="mobile-search-box" ref={searchRef}>
                    <SearchSection />
                </div>
            )}
        </header>
    );
};

export default Header;
