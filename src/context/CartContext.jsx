import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("http://localhost:3001/carrinho");
        if (!response.ok) throw new Error("Erro ao buscar carrinho");
  
        const data = await response.json();
  
        const sanitizedData = data.map((item) => ({
          ...item,
          price: parseFloat(item.price) || 0,
          quantidade: item.quantidade || 1,
        }));
  
        setCartItems(sanitizedData);
      } catch (error) {
        console.error("Erro ao carregar carrinho:", error);
      }
    };
  
    fetchCart();
  }, []);
  

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

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, novaQuantidade) => {
    if (novaQuantidade < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantidade: novaQuantidade } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
