import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#F7DBA7", height: "440px" }}>
            <div id="footer" className="footer-container">
                <div className="align-retp">
                    <div className="footer-rectangle">
                        <h1>Faça seu login e comece a <br /> mimar seu pet!</h1>
                        <div className="login-container">
                            <div className="login-box">
                                <Link to="/login">
                                    <button className="login-button">Login</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <p className="footer-description">
                        No Mimo’s Pet, cuidamos do seu melhor amigo com carinho e
                        qualidade! Encontre os melhores produtos para o bem-estar do seu
                        pet, com praticidade e entrega rápida. Tudo o que ele precisa, a um
                        clique de distância!
                    </p>
                </div>

                <div className="contact-info">
                    <div className="contact-item">
                        <p>📞 Tel: (11) 1234-5678</p>
                    </div>
                    <div className="contact-item">
                        <p>✉️ Email: contato@mimospet.com</p>
                    </div>
                </div>

                <hr />
                <div className="footer-links">
                    <Link
                        to="/"
                        onClick={(e) => {
                            e.preventDefault();
                            const section = document.getElementById("home");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        <p>Início</p>
                    </Link>
                    <Link to="/categorias"><p>Categorias</p></Link>
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
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Mimo’s Pet. Todos os direitos reservados</p>
                    <img src="/images/mimo's-pet-logo.svg" alt="Logo" />
                    <p>Termos de Serviço              Políticas de privacidade</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
