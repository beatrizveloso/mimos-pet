import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
import { UserContext } from "../../context/UserContext";

const Profile = () => {
  const { userData, setUserData } = useContext(UserContext);

  const [activeTab, setActiveTab] = useState("general"); // Adicionado o estado activeTab
  
  // Inicializa os dados do formulário com o UserContext ou com valores padrão
  const [formData, setFormData] = useState({
    username: userData?.username || "",
    name: userData?.name || "",
    email: userData?.email || "",
    bio: userData?.bio || "",
    birthday: userData?.birthday || "",
    country: userData?.country || "",
    phone: userData?.phone || "",
    secondaryEmail: userData?.secondaryEmail || "",
    imagePreview: userData?.imagePreview || "/images/profile.jpg"
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        username: userData.username,
        name: userData.name,
        email: userData.email,
        bio: userData.bio,
        birthday: userData.birthday,
        country: userData.country,
        phone: userData.phone,
        secondaryEmail: userData.secondaryEmail,
        imagePreview: userData.imagePreview
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          imagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUserData(formData);  // Atualiza o contexto com os dados mais recentes
    localStorage.setItem("userProfileData", JSON.stringify(formData));  // Atualiza o localStorage
    alert("Dados salvos com sucesso!");
    window.location.href = "/other-profile";  // Redireciona para o perfil
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div className="tab-pane fade active show">
            <div className="card-body media align-items-center">
              <div className="align-img">
                <img
                  src={formData.imagePreview}
                  alt="Perfil"
                  className="d-block ui-w-80"
                />
                <button className="btn-save" onClick={handleSave}>Salvar</button>
              </div>
              <div className="media-body ml-4">
                <label className="btn btn-outline-primary">
                  Carregar nova foto
                  <input
                    type="file"
                    className="account-settings-fileinput"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                </label>
                <div className="text-light small mt-1">
                  JPG, GIF ou PNG permitidos. Tamanho máximo de 800K
                </div>
              </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body">
              <div className="form-group">
                <label>Nome de usuário</label>
                <input
                  className="form-control"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Nome</label>
                <input
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="alert alert-warning mt-3">
                  Seu e-mail não foi confirmado. Por favor, verifique sua caixa de entrada.
                  <br />
                  <a href="#">Reenviar confirmação</a>
                </div>
              </div>
            </div>
          </div>
        );
      case "change-password":
        return (
          <div className="tab-pane">
            <div className="card-body pb-2">
              <h6 className="mb-4">Alterar a senha</h6>
              <div className="form-group">
                <label>Senha atual</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label>Nova senha</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label>Confirmar nova senha</label>
                <input type="password" className="form-control" />
              </div>
            </div>
          </div>
        );
      default:
        return <div className="tab-pane fade active show">Conteúdo em construção...</div>;
    }
  };

  return (
    <section className="align-profile">
      <div className="container-profile light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">Configurações da Conta</h4>

        <section className="align-group">
          <div className="list-group list-group-flush account-settings-links">
            {[{ id: "general", label: "Geral" }, { id: "change-password", label: "Alterar a senha" }].map((tab) => (
              <button
                key={tab.id}
                className={`list-group-item list-group-item-action ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {renderTabContent()}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Profile;
