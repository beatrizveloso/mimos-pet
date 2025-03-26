import React from "react";
import './ProductsPage.css';
import { useLocation } from "react-router-dom"; 

const ProductsPage = () => {
  const location = useLocation();  
  const produto = location.state; 

  if (!produto) {
    return <p>Produto não encontrado</p>; 
  }

  return (
    <div>
      <h1>{produto.title}</h1>
      <img src={produto.image} alt={produto.title} />
      <p>{produto.category}</p>
      <p>{produto.size}</p>
      <p>Preço: {produto.price}</p>
      {/* Aqui você pode adicionar mais informações ou funcionalidade */}
    </div>
  );
};

export default ProductsPage;
