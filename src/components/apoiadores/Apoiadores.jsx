import React from "react";
import "../apoiadores/Apoiadores.css";

const Apoiadores = () => {
    return (
        <section className="align-apoiadores">
                <h1>Alguns de nossos <span>Apoiadores</span></h1>
                <div className="logos">
                    <img src="images/icon-sheba.png" alt="Logo da empresa Sheba" />
                    <img src="images/icon-whiskas.png" alt="Logo da empresa Whiskas" />
                    <img src="images/icon-bakers.png" alt="Logo da empresa Bakers" />
                    <img src="images/icon-felix.png" alt="Logo da empresa Felix" />
                    <img src="images/icon-goodboy.png" alt="Logo da empresa Goodboy" />
                    <img src="images/icon-butchers.png" alt="Logo da empresa Butchers" />
                    <img src="images/icon-pedigree.png" alt="Logo da empresa Pedigree" />
            </div>
        </section>
    );
};

export default Apoiadores;
