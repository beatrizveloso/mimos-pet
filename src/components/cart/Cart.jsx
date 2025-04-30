import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

// Função para converter string de preço para número
const parsePrice = (price) => {
  if (typeof price === "string") {
    return Number(price.replace("R$", "").replace(",", ".").trim());
  }
  return Number(price);
};

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <input type="checkbox" className="select-item" />
            <img src={item.image} alt={item.title} className="cart-image" />
            <div className="cart-info">
              <h3>{item.title}</h3>
              <p className="cart-size">Tamanho: {item.size}</p>
              <div className="cart-details">
                <div className="align-price">
                  <span className="cart-price">
                    R$ {(parsePrice(item.price) * item.quantidade).toFixed(2).replace(".", ",")}
                  </span>
                  <p className="cart-unit-price">
                    <small>R$ {parsePrice(item.price).toFixed(2).replace(".", ",")} cada</small>
                  </p>
                </div>
                <div className="cart-quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantidade - 1)}>-</button>
                  <span>{item.quantidade}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantidade + 1)}>+</button>
                </div>
              </div>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remover</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
