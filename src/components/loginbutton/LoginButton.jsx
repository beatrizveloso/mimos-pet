import React, { useState, useRef } from 'react';
import './LoginButton.css'; 
import { LuUserRound } from 'react-icons/lu';

function LoginButton() {
  const [showPopup, setShowPopup] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPopup(false);
    }, 400);
  };

  return (
    <div
      className="login-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="login-btn">
        <LuUserRound className="login-icon" />
        <div className="login-text">
          <span className="login-title">Entrar</span>
          <span className="login-sub">Cadastre-se</span>
        </div>
      </button>

      {showPopup && (
        <div className="login-popup">
          <button className="popup-enter">Entrar</button>
          <p>Não tem cadastro? <a href="#">Criar conta</a></p>
        </div>
      )}
    </div>
  );
}

export default LoginButton;
