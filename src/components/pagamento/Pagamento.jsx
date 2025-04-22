import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Pagamento.css";

export default function Pagamento() {
  const [formaPagamento, setFormaPagamento] = useState("cartao");

  return (
    <div className="pagamento-container">
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

      {/* Seleção de pagamento */}
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
            <select>
              <option value="">Selecione o número de parcelas</option>
              <option value="1x">1x de R$ 97,00 (sem juros)</option>
              <option value="2x">2x de R$ 48,50</option>
              <option value="3x">3x de R$ 32,33</option>
            </select>
          </div>
        )}

        {formaPagamento === "pix" && (
          <div className="pagamento-pix">
            <p>Você receberá um QR Code após clicar em "Comprar Agora".</p>
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
