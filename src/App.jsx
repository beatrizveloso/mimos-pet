import React from "react";
import { CartProvider } from "./context/CartContext";
import AppRoutes from "./routes/AppRoutes";
import { UserProvider } from "./context/UserContext";
// import Chatbot from "./components/chatbot/ChatBot";
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <AppRoutes />
        {/* <Chatbot /> */}
      </CartProvider>
    </UserProvider>
  );
};

export default App;
