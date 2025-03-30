import React from "react";
import { CartProvider } from "./context/CartContext"; 
import AppRoutes from "./routes/AppRoutes";
import Chatbot from "./components/chatbot/ChatBot";
import './App.css';

const App = () => {
  return (
    <CartProvider> 
      <AppRoutes />
      <Chatbot /> 
    </CartProvider>
  );
};

export default App;
