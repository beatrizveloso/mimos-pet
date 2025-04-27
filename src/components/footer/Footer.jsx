import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#F7DBA7" }}>
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

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.559424972781!2d-46.72040232517223!3d-23.655944165072835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51a36a2b5357%3A0x6375faa71efa063e!2sUniversidade%20Cruzeiro%20do%20Sul%20-%20Campus%20Santo%20Amaro!5e0!3m2!1spt-BR!2sbr!4v1725216481621!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização Mimo’s Pet"
                        ></iframe>
                    </div>

                </div>

                <div className="contact-info">
                    <div className="contact-item">
                        <p>Tel: (11) 1234-5678</p>
                    </div>
                    <div className="contact-item">
                        <p>Email: contato@mimospet.com</p>
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
                    <Link to="/sobre-nos"><p>Sobre Nós</p></Link>
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
