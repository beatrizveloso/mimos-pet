import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Pagamento.css";

export default function Pagamento() {
  const { cartItems } = useContext(CartContext);
  const [formaPagamento, setFormaPagamento] = useState("cartao");
  const [parcelas, setParcelas] = useState(1);

  const parsePrice = (price) => {
    if (typeof price === "string") {
      return Number(price.replace("R$", "").replace(",", ".").trim());
    }
    return Number(price);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parsePrice(item.price) * item.quantidade,
    0
  );
  const descontoTotal = subtotal * 0.1877;
  const totalFinal = subtotal - descontoTotal + 8;

  const gerarParcelas = () => {
    const maxParcelas = Math.min(12, Math.floor(totalFinal / 10));
    const options = [];
    
    for (let i = 1; i <= maxParcelas; i++) {
      const valorParcela = totalFinal / i;
      const juros = i > 1 && i <= 3 ? " (sem juros)" : i > 3 ? ` (com juros)` : "";
      options.push(
        <option key={i} value={i}>
          {i}x de R$ {valorParcela.toFixed(2).replace(".", ",")}{juros}
        </option>
      );
    }
    return options;
  };

  return (
    <div className="pagamento-container">
      <div className="resumo-pedido">
        <h2>Resumo do Pedido</h2>
        <div className="linha">
          <span>Subtotal:</span>
          <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
        </div>
        <div className="linha desconto">
          <span>Descontos:</span>
          <span>- R$ {descontoTotal.toFixed(2).replace(".", ",")}</span>
        </div>
        <div className="linha">
          <span>Frete:</span>
          <span>R$ 8,00</span>
        </div>
        <div className="linha total">
          <span>Total:</span>
          <span>R$ {totalFinal.toFixed(2).replace(".", ",")}</span>
        </div>
      </div>

      <div className="dados-cadastrais">
        <h2>1 - Dados cadastrais</h2>
        <div className="radio-group">
          <label>
            <input type="radio" name="tipoPessoa" defaultChecked />
            Brasileiro
          </label>
          <label>
            <input type="radio" name="tipoPessoa" />
            Estrangeiro
          </label>
        </div>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="E-mail" />
        <div className="duplo">
          <input type="text" placeholder="Celular com DDD" />
          <input type="text" placeholder="CPF ou CNPJ" />
        </div>
      </div>

      <div className="selecao-pagamento">
        <h2>2 - Selecionar pagamento</h2>
        <div className="opcoes-pagamento">
          <button
            className={formaPagamento === "cartao" ? "ativo" : ""}
            onClick={() => setFormaPagamento("cartao")}
          >
            Cartão
          </button>
          <button
            className={formaPagamento === "pix" ? "ativo" : ""}
            onClick={() => setFormaPagamento("pix")}
          >
            Pix
          </button>
          <button
            className={formaPagamento === "boleto" ? "ativo" : ""}
            onClick={() => setFormaPagamento("boleto")}
          >
            Boleto
          </button>
        </div>

        {formaPagamento === "cartao" && (
          <div className="pagamento-cartao">
            <div className="bandeiras">
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
              <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="MasterCard" />
              <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
              <img src="https://img.icons8.com/color/48/discover.png" alt="Discover" />
            </div>
            <input type="text" placeholder="Número do cartão" />
            <input type="text" placeholder="Nome impresso no cartão" />
            <div className="duplo">
              <input type="text" placeholder="Validade (MM/AA)" />
              <input type="text" placeholder="Código de segurança (CVV)" />
            </div>
            <select value={parcelas} onChange={(e) => setParcelas(parseInt(e.target.value))}>
              {gerarParcelas()}
            </select>
          </div>
        )}

        {formaPagamento === "pix" && (
          <div className="pagamento-pix">
            <p>Você receberá um QR Code após clicar em "Comprar Agora".</p>
            <p className="desconto-pix">5% de desconto: R$ {(totalFinal * 0.95).toFixed(2).replace(".", ",")}</p>
          </div>
        )}

        {formaPagamento === "boleto" && (
          <div className="pagamento-boleto">
            <p>O boleto será gerado após clicar em "Comprar Agora".</p>
          </div>
        )}

        <Link to="/aprovado">
          <button className="botao-comprar">Comprar Agora</button>
        </Link>
        
        <div className="seguro">
          <p>VOCÊ ESTÁ EM <strong>AMBIENTE SEGURO</strong></p>
          <small>Este é um produto digital, você receberá os dados por e-mail.</small>
        </div>
      </div>
    </div>
  );
}
