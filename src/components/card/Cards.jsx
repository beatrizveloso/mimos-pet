import React from 'react'; 
import './Card.css'; 
import Card from './Card';

const produtosData = [
  { image: 'images/ração.png', title: 'Ração Seca Para Gatos Adultos Carne', category: 'Alimentação', size: ' Tamanho: 2,7kg', price: 'R$42,42' },
  { image: 'images/pipicat.png', title: 'Areia Higiênica Pipicat Classic Para Gatos', category: 'Higiene', size: ' Tamanho: 4kg', price: 'R$12,25' },
  { image: 'images/mochila-cat.png', title: 'Transporte Mochila Pet Gatos E Cães', category: 'Transporte', size: ' Tamanho: Único', price: 'R$347,99' },
  { image: 'images/bola-cravo.png', title: 'Brinquedo Bola Vinil com Cravo para Cães', category: 'Brinquedo', size: ' Tamanho: P', price: 'R$14,49' },
  { image: 'images/brinquedo-ventosa.png', title: 'Brinquedo Corda Ventosa Morder Pet Cachorro Azul', category: 'Brinquedo', size: ' Tamanho: Único', price: 'R$19,30' },
  { image: 'images/comedouro.png', title: 'Comedouro E Brinquedo Petball Mini Pet Games', category: 'Brinquedo', size: ' Tamanho: P', price: 'R$36,46' },
  { image: 'images/shampoo-neutro.png', title: 'Shampoo Pet Clean Neutro para Cães e Gatos', category: 'Higiene', size: ' Tamanho: 700ml', price: 'R$17,90' },
  { image: 'images/frango-galinha.png', title: 'Frango Galinha Borracha Morder Brinquedo Pet ', category: 'Brinquedo', size: ' Tamanho: Único', price: 'R$19,60' }
];

const Cards = ({ filtro }) => {
  const produtosFiltrados = filtro && filtro !== "Filtre por:" ? produtosData.filter(produto => produto.category === filtro) : produtosData;

  return (
    <div className="produtos-container">
      {produtosFiltrados.map((produto, index) => (
        <Card 
          key={index}
          image={produto.image}
          title={produto.title}
          category={produto.category}
          size={produto.size}
          price={produto.price}
        />
      ))}
    </div>
  );
};

export default Cards;
