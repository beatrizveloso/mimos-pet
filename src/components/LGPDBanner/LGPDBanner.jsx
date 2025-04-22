import { useEffect, useState } from "react";
import { Link } from "react-router-dom";// Importando Link

export default function LGPDBanner() {
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    setVisivel(true); 
  }, []);

  const aceitar = () => {
    setVisivel(false);
    document.cookie = "cookiesAceitos=true; path=/; max-age=" + 60 * 60 * 24 * 365; 
  };

  if (!visivel) return null;

  return (
    <div style={estilos.banner}>
      <p style={estilos.texto}>
        Usamos cookies e dados conforme a{" "}
        <Link to="/politica-de-privacidade" style={estilos.link}>
          Política de Privacidade
        </Link>{" "}
        e os{" "}
        <Link to="/termos-de-servico" style={estilos.link}>
          Termos de Serviço
        </Link>
        . Ao continuar navegando, você concorda com isso.
      </p>
      <button onClick={aceitar} style={estilos.botao}>
        Ok, entendi
      </button>
    </div>
  );
}

const estilos = {
  banner: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#051a2e",
    color: "#fff",
    padding: "1rem",
    textAlign: "center",
    zIndex: 999,
  },
  texto: {
    margin: 0,
    fontSize: "0.9rem",
  },
  link: {
    color: "#90cdf4",
    textDecoration: "underline",
  },
  botao: {
    marginTop: "0.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#c78726",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  },
};
