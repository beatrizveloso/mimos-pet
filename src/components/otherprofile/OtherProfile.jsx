import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./OtherProfile.css";
import { UserContext } from "../../context/UserContext";

const OtherProfile = () => {
  const { userData: contextUserData } = useContext(UserContext);
  const [userData, setUserData] = useState(contextUserData);

  useEffect(() => {
    if (!contextUserData) {
      const storedData = localStorage.getItem("userProfileData");
      if (storedData) {
        setUserData(JSON.parse(storedData));
      }
    }
  }, [contextUserData]);

  if (!userData) {
    return <p>Carregando perfil...</p>;
  }

  return (
    <div className="other-container">
      <div className="other-profile-card">
        <div className="other-left">
          <img
            src={userData.imagePreview || "/images/profile.jpg"}
            alt="Foto do usuário"
            className="other-profile-image"
          />
          <h2 className="other-name">{userData.name}</h2>
          <p className="other-caption">{userData.bio || "Seu perfil"}</p>

          <div className="other-info-box">
            <p><strong>Nível:</strong> <span className="badge">Novato</span></p>
            <p><strong>Membro desde:</strong> 13 de abril de 2025</p>
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
              <p>{userData.name}</p>
            </div>
            <div>
              <strong>Gênero:</strong>
              <p>{userData.gender || "Não informado"}</p>
            </div>
            <div>
              <strong>Localização:</strong>
              <p>{userData.country}</p>
            </div>
            <div>
              <strong>Email:</strong>
              <p>
                <a href={`mailto:${userData.email}`}>{userData.email}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProfile;
