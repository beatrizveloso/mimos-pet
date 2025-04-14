import React, { useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [username, setUsername] = useState("jujucs");
  const [name, setName] = useState("Julia Castro");
  const [email, setEmail] = useState("juliacastro@mail.com");
  const [bio, setBio] = useState("Lorem ipsum dolor sit amet...");
  const [birthday, setBirthday] = useState("3/03/2000");
  const [country, setCountry] = useState("Brasil");
  const [phone, setPhone] = useState("+55 (11) 44022-8922");
  const [secondaryEmail, setSecondaryEmail] = useState("");
  const [activeTab, setActiveTab] = useState("general");
  const [imagePreview, setImagePreview] = useState("/images/profile.jpg");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log("Dados salvos:");
    console.log("Nome de usuário:", username);
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Biografia:", bio);
    console.log("Aniversário:", birthday);
    console.log("País:", country);
    console.log("Telefone:", phone);
    console.log("Email secundário:", secondaryEmail);
    alert("Dados salvos com sucesso!");
  };
  

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div className="tab-pane fade active show">

            <div className="card-body media align-items-center">

              <div className="align-img">
                <img src={imagePreview} alt="Perfil" className="d-block ui-w-80" />
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
                <input className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Nome</label>
                <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
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
      case "info":
      case "social-links":
      case "connections":
      case "notifications":
        return (
          <div className="tab-pane">
            <div className="card-body">
              <div className="form-group">
                <label>Biografia</label>
                <textarea className="form-control" rows="5" value={bio} onChange={(e) => setBio(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Aniversário</label>
                <input className="form-control" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
              </div>
              <div className="form-group">
                <label>País</label>
                <select className="custom-select" value={country} onChange={(e) => setCountry(e.target.value)}>
                  <option>USA</option>
                  <option>Brasil</option>
                  <option>Alemanha</option>
                  <option>França</option>
                  <option>Japão</option>
                </select>
              </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body pb-2">
              <h6 className="mb-4">Contatos</h6>
              <div className="form-group">
                <label>Telefone</label>
                <input className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Email Secundário</label>
                <input className="form-control" value={secondaryEmail} onChange={(e) => setSecondaryEmail(e.target.value)} />
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
          {[
            { id: "general", label: "Geral" },
            { id: "change-password", label: "Alterar a senha" },
            { id: "info", label: "Informações" }
          ].map((tab) => (
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
}
