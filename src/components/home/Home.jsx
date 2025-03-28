import React from "react";
import { Link } from "react-router-dom";
import "../home/Home.css";

const Home = () => {
    return (
        <main id="homepage">
        <div className="shape">
        <img src="images/img-main.svg" alt="imagem de um cachorro filhote com dois retangulos atrás" />
        </div>
        <div className="text-home">
            <div className="home-h1">
            <img src="images/retangulinhos.svg" alt="" />
            <h1>Mimo’s <span>pet</span></h1>
            <img src="images/retangulinho.svg" alt="" />
            </div>
            <p>Aqui você encontra tudo para cuidar do seu pet  com carinho e praticidade. Produtos de qualidade, entrega rápida e muito amor em cada escolha. Tudo o que seu pet precisa, a um clique de distância!</p>
            <div className="home-btn">
            <Link to="/categorias">
            <button><p>Ver Produtos</p></button>
            </Link>
            </div>
        </div>
        </main>
    );
};

export default Home;
