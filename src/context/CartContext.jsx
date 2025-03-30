import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("URL_DA_SUA_API/carrinho");
        if (!response.ok) throw new Error("Erro ao buscar carrinho");
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error("Erro ao carregar carrinho:", error);
      }
    };

    fetchCart();
  }, []);

  // ✅ Adicionando a função para adicionar itens ao carrinho
  const addToCart = (produto, quantidade) => {
    setCartItems((prevItems) => {
      const itemExiste = prevItems.find((item) => item.id === produto.id);

      if (itemExiste) {
        return prevItems.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      } else {
        return [...prevItems, { ...produto, quantidade }];
      }
    });
  };

  // ✅ Adicionando a função para remover itens do carrinho
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
