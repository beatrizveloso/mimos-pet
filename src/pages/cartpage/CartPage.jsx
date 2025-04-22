import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Header from "../../components/header/Header";
import Cart from "../../components/cart/Cart";
import Footer from "../../components/footer/Footer";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const cartRef = useRef(null);
  const [cep, setCep] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleCepChange = (e) => {
    const value = e.target.value;
    setCep(value);
    if (value.length === 9) {
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantidade, 0);
  const descontoTotal = subtotal * 0.1877;
  const totalFinal = subtotal - descontoTotal;

  return (
    <div className="cartpage-container">
      <Header cartRef={cartRef} />
      <div className="cartpage-content">
        <div className="cart-left">
          {cartItems.length > 0 ? <Cart /> : <p>Seu carrinho está vazio.</p>}
        </div>

        <div className="cart-right">
          <div className="cep-box">
            <label htmlFor="cep">Qual o CEP?</label>
            <input
              type="text"
              id="cep"
              value={cep}
              onChange={handleCepChange}
              placeholder="00000-000"
              maxLength="9"
            />
          </div>

          {showOptions && (
            <>
              <div className="shipping-options">
                <h3>Escolha a forma de entrega</h3>
                <ul>
                  <li><strong>Padrão:</strong> Grátis – Até 14/04/2025</li>
                  <li><strong>Expressa:</strong> R$ 7,90 – Em até 3 horas</li>
                </ul>
              </div>

              <div className="summary-box">
                <h4>Resumo do pedido</h4>
                <div className="line">
                  <span>Valor dos produtos ({cartItems.length} {cartItems.length === 1 ? "item" : "itens"})</span>
                  <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="line discount">
                  <span>Total de descontos</span>
                  <span>- R$ {descontoTotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="total">
                  <span>Total</span>
                  <span>R$ {totalFinal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="installment">
                  ou 3x de R$ {(totalFinal / 3).toFixed(2).replace('.', ',')} sem juros
                </div>

                <Link to="/pagamento">
                <button className="button-primary">Ir para pagamento</button>
                </Link>

                <Link to="/categorias">
                  <button className="button-secondary">Escolher mais produtos</button>
                </Link>

                <div className="payment-logos">
                  <p>Formas de pagamento:</p>
                  <img src="/images/bandeiras-cartoes.png" alt="Formas de pagamento" />
                </div>
                <div className="support-box">
                  <p>Tem alguma dúvida? <a href="#">Atendimento</a><br />(11) 3434-6980</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
