import React from "react";
import { FiShoppingBag, FiCheck } from "react-icons/fi";
import "./PagamentoAprovado.css";

export default function PagamentoAprovado() {
  return (
    <div className="pagamento-aprovado">
      <div className="icone">
        <FiShoppingBag className="sacola-icon" />
        <span className="check">
          <FiCheck />
        </span>
      </div>
      <h2>Pronto, seu pagamento foi aprovado!</h2>
      <p>Operação: 123/45620000</p>
    </div>
  );
}
