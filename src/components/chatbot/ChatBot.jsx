import { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    // Adicionar o script do Botsonic ao carregar o componente
    (function (w, d, s, o, f, js, fjs) {
      w["botsonic_widget"] = o;
      w[o] =
        w[o] ||
        function () {
          (w[o].q = w[o].q || []).push(arguments);
        };
      js = d.createElement(s);
      fjs = d.getElementsByTagName(s)[0];
      js.id = o;
      js.src = f;
      js.async = 1;
      fjs.parentNode.insertBefore(js, fjs);
    })(window, document, "script", "Botsonic", "https://widget.botsonic.com/CDN/botsonic.min.js");

    // Inicializar o Botsonic após o carregamento do script
    if (window.Botsonic) {
      window.Botsonic("init", {
        serviceBaseUrl: "https://api-azure.botsonic.ai",
        token: "f8ba7ccd-5059-45f5-9d44-f581eb0b25e3", // Substitua pelo seu token
      });
    }

    // Limpeza: Remover o script ao desmontar o componente
    return () => {
      const script = document.getElementById("Botsonic");
      if (script) {
        script.remove();
      }
    };
  }, []);

  return null; // O ChatBot será inserido automaticamente no DOM
};

export default ChatBot;
