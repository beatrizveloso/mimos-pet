import React, { useContext, useRef } from "react";
import { CartContext } from "../../context/CartContext";
import Header from "../../components/header/Header";
import Cart from "../../components/cart/Cart";
import Footer from "../../components/footer/Footer";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const cartRef = useRef(null);

  return (
    <div className="cartpage-container">
      <Header cartRef={cartRef} />
      <div className="cart-text">
      <h1>Carrinho de Compras</h1>
      </div>
      {cartItems.length > 0 ? <Cart /> : <p>Seu carrinho está vazio.</p>}
      <Footer />
    </div>
  );
};

export default CartPage;
