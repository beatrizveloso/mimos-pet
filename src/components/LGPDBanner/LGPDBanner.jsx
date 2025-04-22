import { useEffect, useState } from "react";

export default function LGPDBanner() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aceito = localStorage.getItem("lgpdAceito");
    if (!aceito) {
      setVisivel(true);
    }
  }, []);

  const aceitar = () => {
    localStorage.setItem("lgpdAceito", "true");
    setVisivel(false);
  };

  if (!visivel) return null;

  return (
    <div style={estilos.banner}>
      <p style={estilos.texto}>
        Usamos cookies e dados conforme a{" "}
        <a href="/politica-de-privacidade" target="_blank" style={estilos.link}>
          Política de Privacidade
        </a>{" "}
        e os{" "}
        <a href="/termos-de-servico" target="_blank" style={estilos.link}>
          Termos de Serviço
        </a>
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
