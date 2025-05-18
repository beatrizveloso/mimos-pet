import React, { useContext, useRef, useState, useEffect } from "react";
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
  const [shippingOption, setShippingOption] = useState("");
  const [shippingPrice, setShippingPrice] = useState(8);
  const [estimatedDelivery, setEstimatedDelivery] = useState("");

  const handleCepChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedCep = value.replace(/^(\d{5})(\d)/, "$1-$2");
    setCep(formattedCep);
    setShowOptions(value.length === 8);
  };

  const handleShippingSelect = (option) => {
    setShippingOption(option);
    if (option === "expressa") {
      setShippingPrice(calculateShippingPrice() + 5);
      setEstimatedDelivery("Em até 3 horas");
    } else {
      setShippingPrice(calculateShippingPrice());
      setEstimatedDelivery("Até 5 dias úteis");
    }
  };

  const calculateShippingPrice = () => {
    if (cep.length !== 9) return 8;
    
    const cepNumber = cep.replace("-", "");
    const firstDigit = cepNumber.charAt(0);
    
    if (["0", "1", "2"].includes(firstDigit)) return 8;
    if (["3", "4", "5"].includes(firstDigit)) return 10;
    if (["6", "7"].includes(firstDigit)) return 12;
    return 15;
  };

  const parsePrice = (price) => {
    if (typeof price === "string") {
      return Number(price.replace("R$", "").replace(",", ".").trim());
    }
    return Number(price);
  };

  useEffect(() => {
    if (cep.length === 9 && shippingOption) {
      if (shippingOption === "expressa") {
        setShippingPrice(calculateShippingPrice() + 5);
      } else {
        setShippingPrice(calculateShippingPrice());
      }
    }
  }, [cep, shippingOption]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parsePrice(item.price) * item.quantidade,
    0
  );
  const descontoTotal = subtotal * 0.1877;
  const totalFinal = subtotal - descontoTotal + shippingPrice;

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
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingOption === "padrao"}
                        onChange={() => handleShippingSelect("padrao")}
                      />
                      <strong>Padrão:</strong> R$ {calculateShippingPrice().toFixed(2).replace(".", ",")} – Até 5 dias úteis
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingOption === "expressa"}
                        onChange={() => handleShippingSelect("expressa")}
                      />
                      <strong>Expressa:</strong> R$ {(calculateShippingPrice() + 5).toFixed(2).replace(".", ",")} – Em até 3 horas
                    </label>
                  </li>
                </ul>
              </div>

              <div className="summary-box">
                <h4>Resumo do pedido</h4>
                <div className="line">
                  <span>Valor dos produtos ({cartItems.length} {cartItems.length === 1 ? "item" : "itens"})</span>
                  <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="line discount">
                  <span>Total de descontos</span>
                  <span>- R$ {descontoTotal.toFixed(2).replace(".", ",")}</span>
                </div>
                {shippingOption && (
                  <div className="line">
                    <span>Frete ({shippingOption})</span>
                    <span>R$ {shippingPrice.toFixed(2).replace(".", ",")}</span>
                  </div>
                )}
                <div className="total">
                  <span>Total</span>
                  <span>R$ {totalFinal.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="installment">
                  ou 3x de R$ {(totalFinal / 3).toFixed(2).replace(".", ",")} sem juros
                </div>

                <Link to="/pagamento">
                  <button className="button-primary" disabled={!shippingOption}>
                    Ir para pagamento
                  </button>
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
