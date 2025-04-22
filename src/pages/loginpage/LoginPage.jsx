import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";
import LGPDBanner from "../../components/LGPDBanner/LGPDBanner";
import "./LoginPage.css";

const LoginPage = () => {
  const { setUserData } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    document.title = "Mimo's Pet";
  }, []);

  const handleCreateAccount = () => {
    const data = {
      name: document.getElementById("names").value,
      email: document.getElementById("emailCreate").value,
      celular: document.getElementById("celular").value,
      telefone: document.getElementById("telefone").value,
      sexo: document.getElementById("sexo").value,
      nascimento: document.getElementById("nascimento").value,
      cpf: document.getElementById("cpf").value,
      senha: document.getElementById("passwordCreate").value,
    };
    setUserData(data);
    alert("Conta criada com sucesso!");
  };

  return (
    <>
      <LGPDBanner />
      <section className="bg-login">
        <Link to="/">
          <div className="back-arrow-container">
            <button className="back-btn">
              <FaArrowLeft className="back-icon" />
            </button>
          </div>
        </Link>

        <div className={`login container grid ${isRegistering ? "active" : ""}`} id="loginAccessRegister">
          <svg className="login__blob" viewBox="0 0 566 840" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0" maskType="alpha">
              <path d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z" />
              <image className="login__img" href="/images/bg-img2.jpg" />
            </g>
          </svg>

          <div className="login__access">
            <h1 className="login__title">Entre na sua conta.</h1>
            <div className="login__area">
              <div className="login__content grid">
                <div className="login__box">
                  <input type="text" id="email" placeholder=" " className="login__input" />
                  <label htmlFor="email" className="login__label">Email</label>
                  <i className="ri-mail-fill login__icon"></i>
                </div>
                <div className="login__box">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder=" "
                    className="login__input"
                  />
                  <label htmlFor="password" className="login__label">Senha</label>
                  <i
                    className={`ri-eye${showPassword ? "-off" : ""}-fill login__icon login__password`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </div>
              </div>
              <a href="#" className="login__forgot">Esqueceu sua senha?</a>

              <Link to="/other-profile">
                <button className="login__button" onClick={() => alert("Login bem-sucedido!")}>Login</button>
              </Link>

              <div className="login__social">
                <p className="login__social-title">Ou faça login com</p>
                <div className="login__social-links">
                  <a href="#" className="login__social-link">
                    <img src="/images/icon-google.svg" alt="Google" className="login__social-img" />
                  </a>
                  <a href="#" className="login__social-link">
                    <img src="/images/icon-facebook.svg" alt="Facebook" className="login__social-img" />
                  </a>
                  <a href="#" className="login__social-link">
                    <img src="/images/icon-apple.svg" alt="Apple" className="login__social-img" />
                  </a>
                </div>
              </div>

              <p className="login__switch">Não possui uma conta?
                <button onClick={() => setIsRegistering(true)}>Crie uma conta</button>
              </p>
            </div>
          </div>

          <div className="login__register">
            <h1 className="login__title">Criar nova conta.</h1>
            <div className="login__area">
              <div className="login__content grid">
                <div className="login__box">
                  <input type="text" id="names" placeholder=" " className="login__input" />
                  <label htmlFor="names" className="login__label">Nome e sobrenome</label>
                  <i className="ri-id-card-fill login__icon"></i>
                </div>
                <div className="login__box">
                  <input type="text" id="emailCreate" placeholder=" " className="login__input" />
                  <label htmlFor="emailCreate" className="login__label">Email</label>
                  <i className="ri-mail-fill login__icon"></i>
                </div>

                <div className="login__row">
                  <div className="login__box">
                    <input type="text" id="celular" placeholder=" " className="login__input" />
                    <label htmlFor="celular" className="login__label">Celular</label>
                    <i className="ri-phone-fill login__icon"></i>
                  </div>
                  <div className="login__box">
                    <input type="text" id="telefone" placeholder=" " className="login__input" />
                    <label htmlFor="telefone" className="login__label">Telefone</label>
                    <i className="ri-phone-line login__icon"></i>
                  </div>
                </div>

                <div className="login__box">
                  <select id="sexo" className="login__input">
                    <option value="">Selecione o sexo</option>
                    <option value="feminino">Feminino</option>
                    <option value="masculino">Masculino</option>
                    <option value="outro">Outro</option>
                  </select>
                  <label htmlFor="sexo" className="login__label">Sexo</label>
                  <i className="ri-user-fill login__icon"></i>
                </div>

                <div className="login__box">
                  <input type="date" id="nascimento" placeholder=" " className="login__input" />
                  <label htmlFor="nascimento" className="login__label">Data de nascimento</label>
                  <i className="ri-calendar-2-fill login__icon"></i>
                </div>
                <div className="login__box">
                  <input type="text" id="cpf" placeholder=" " className="login__input" />
                  <label htmlFor="cpf" className="login__label">CPF</label>
                  <i className="ri-file-user-fill login__icon"></i>
                </div>

                <div className="login__row">
                  <div className="login__box login__password-box">
                    <input
                      type={showRegisterPassword ? "text" : "password"}
                      id="passwordCreate"
                      placeholder=" "
                      className="login__input"
                    />
                    <label htmlFor="passwordCreate" className="login__label">Senha</label>
                    <span className="login__icon login__eye" onClick={() => setShowRegisterPassword(!showRegisterPassword)}>
                      {showRegisterPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <div className="login__box login__password-box">
                    <input
                      type={showRegisterPassword ? "text" : "password"}
                      id="confirmPassword"
                      placeholder=" "
                      className="login__input"
                    />
                    <label htmlFor="confirmPassword" className="login__label">Confirmar Senha</label>
                    <span className="login__icon login__eye" onClick={() => setShowRegisterPassword(!showRegisterPassword)}>
                      {showRegisterPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
              </div>

              <Link to="/other-profile">
                <button className="login__button" onClick={handleCreateAccount}>Criar Conta</button>
              </Link>

              <p className="login__switch">
                Já possui uma conta?
                <button onClick={() => setIsRegistering(false)}>Faça login</button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
