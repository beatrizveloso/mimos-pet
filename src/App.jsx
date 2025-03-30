import React from "react";
import { CartProvider } from "./context/CartContext"; 
import AppRoutes from "./routes/AppRoutes";
import './App.css';

const App = () => {
  return (
    <CartProvider> 
      <AppRoutes />
    </CartProvider>
  );
};

export default App;
