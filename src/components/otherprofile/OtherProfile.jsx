import React from "react";
import { Link } from "react-router-dom";
import "./OtherProfile.css";

const OtherProfile = () => {
  return (
    <div className="other-container">
      <div className="other-profile-card">
        <div className="other-left">
          <img
            src="/images/profile.jpg"
            alt="Foto do usuário"
            className="other-profile-image"
          />
          <h2 className="other-name">Julia Emilia de Castro</h2>
          <p className="other-caption">Sem legenda</p>

          <div className="other-info-box">
            <p><strong>Nível:</strong> <span className="badge">Novato</span></p>
            <p><strong>Membro desde:</strong> 18 de junho de 2024</p>
          </div>

          <Link to="/profile">
            <button className="edit-profile-btn">Alterar perfil</button>
          </Link>
        </div>

        <div className="other-right">
          <h3>Sobre</h3>
          <div className="other-details">
            <div>
              <strong>Nome completo:</strong>
              <p>Julia Emilia de Castro</p>
            </div>
            <div>
              <strong>Gênero:</strong>
              <p>Feminino</p>
            </div>
            <div>
              <strong>Localização:</strong>
              <p>São Paulo, SP</p>
            </div>
            <div>
              <strong>Email:</strong>
              <p>
                <a href="mailto:juliacastro@mail.com">juliacastro@mail.com</a>
              </p>
            </div>
          </div>

          <h3>Receitas recentes</h3>
          <p className="other-no-posts">Nenhuma receita publicada ainda.</p>
        </div>
      </div>
    </div>
  );
};

export default OtherProfile;
