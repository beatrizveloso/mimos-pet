import React from "react";
import "../banner/Banner.css";

const BannerCategoria = () => {
    return (
        <section id="sobre-nos" className="align-banner">
            <div className="banner-desktop">
                <img src="images/banner-categoria.svg" alt="Banner retangular de categoria versão desktop" />
            </div>
            <div className="banner-mobile2">
                <img src="images/banner-cate-resp.png" alt="Banner retangular de categoria versão mobile" />
            </div>
        </section>
    );
};

export default BannerCategoria;
