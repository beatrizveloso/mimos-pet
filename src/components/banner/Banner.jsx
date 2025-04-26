import React from "react";
import "../banner/Banner.css";

const Banner = () => {
    return (
        <section id="sobre-nos" className="align-banner">
            <div className="banner-desktop">
                <img src="images/banner-main.svg" alt="Banner retangular de gatinho" />
            </div>
            <div className="banner-mobile">
                <img src="images/banner-main-resp.png" alt="Banner retangular de gatinho versão mobile" />
            </div>
        </section>
    );
};

export default Banner;
