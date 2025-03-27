import React, { useState, useEffect } from 'react';
import './Card.css';
import Card from './Card';

const Cards = ({ filtro, searchTerm, limit, paginated }) => {
  const produtosData = [
    { image: 'images/ração.png', title: 'Ração Seca Para Gatos Adultos Carne', category: 'Alimentação', size: 'Tamanho: 2,7kg', price: 'R$42,42' },
    { image: 'images/pipicat.png', title: 'Areia Higiênica Pipicat Classic Para Gatos', category: 'Higiene', size: 'Tamanho: 4kg', price: 'R$12,25' },
    { image: 'images/mochila-cat.png', title: 'Transporte Mochila Pet Gatos E Cães', category: 'Transporte', size: 'Tamanho: Único', price: 'R$347,99' },
    { image: 'images/bola-cravo.png', title: 'Brinquedo Bola Vinil com Cravo para Cães', category: 'Brinquedo', size: 'Tamanho: P', price: 'R$14,49' },
    { image: 'images/brinquedo-ventosa.png', title: 'Brinquedo Corda Ventosa Morder Pet Cachorro Azul', category: 'Brinquedo', size: 'Tamanho: Único', price: 'R$19,30' },
    { image: 'images/comedouro.png', title: 'Comedouro E Brinquedo Petball Mini Pet Games', category: 'Brinquedo', size: 'Tamanho: P', price: 'R$36,46' },
    { image: 'images/shampoo-neutro.png', title: 'Shampoo Pet Clean Neutro para Cães e Gatos', category: 'Higiene', size: 'Tamanho: 700ml', price: 'R$17,90' },
    { image: 'images/frango-galinha.png', title: 'Frango Galinha Borracha Morder Brinquedo Pet', category: 'Brinquedo', size: 'Tamanho: Único', price: 'R$19,60' },
    { image: 'images/ração.png', title: 'Ração Seca Para Gatos Adultos Carne', category: 'Alimentação', size: 'Tamanho: 2,7kg', price: 'R$42,42' },
    { image: 'images/pipicat.png', title: 'Areia Higiênica Pipicat Classic Para Gatos', category: 'Higiene', size: 'Tamanho: 4kg', price: 'R$12,25' },
    { image: 'images/mochila-cat.png', title: 'Transporte Mochila Pet Gatos E Cães', category: 'Transporte', size: 'Tamanho: Único', price: 'R$347,99' },
    { image: 'images/bola-cravo.png', title: 'Brinquedo Bola Vinil com Cravo para Cães', category: 'Brinquedo', size: 'Tamanho: P', price: 'R$14,49' },
    { image: 'images/brinquedo-ventosa.png', title: 'Brinquedo Corda Ventosa Morder Pet Cachorro Azul', category: 'Brinquedo', size: 'Tamanho: Único', price: 'R$19,30' },
    { image: 'images/comedouro.png', title: 'Comedouro E Brinquedo Petball Mini Pet Games', category: 'Brinquedo', size: 'Tamanho: P', price: 'R$36,46' },
    { image: 'images/shampoo-neutro.png', title: 'Shampoo Pet Clean Neutro para Cães e Gatos', category: 'Higiene', size: 'Tamanho: 700ml', price: 'R$17,90' },
    { image: 'images/frango-galinha.png', title: 'Frango Galinha Borracha Morder Brinquedo Pet', category: 'Brinquedo', size: 'Tamanho: Único', price: 'R$19,60' },
  ];

  const [paginaAtual, setPaginaAtual] = useState(1);

  useEffect(() => {
    setPaginaAtual(1);
  }, [filtro, searchTerm]);

  const produtosFiltrados = produtosData.filter(produto => {
    const matchesCategory = filtro && filtro !== "Filtre por:" ? produto.category === filtro : true;
    const matchesSearchTerm = searchTerm ? produto.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    return matchesCategory && matchesSearchTerm;
  });

  let produtosExibidos = produtosFiltrados;
  if (limit) {
    produtosExibidos = produtosFiltrados.slice(0, limit);
  }

  const itensPorPagina = 12; 
  const totalPaginas = Math.ceil(produtosFiltrados.length / itensPorPagina);

  if (paginated) {
    produtosExibidos = produtosFiltrados.slice(
      (paginaAtual - 1) * itensPorPagina,
      paginaAtual * itensPorPagina
    );
  }

  useEffect(() => {
    if (paginaAtual > totalPaginas) {
      setPaginaAtual(1);
    }
  }, [totalPaginas, paginaAtual]);

  return (
    <>
      <div className="produtos-container">
        {produtosExibidos.length === 0 ? (
          <p className="mensagem-vazia">Nenhum produto encontrado.</p>
        ) : (
          produtosExibidos.map((produto, index) => (
            <Card 
              key={index}
              image={produto.image}
              title={produto.title}
              category={produto.category}
              size={produto.size}
              price={produto.price}
            />
          ))
        )}
      </div>
  
      {paginated && totalPaginas > 1 && (
        <div className="pagination-container">
          <div className="pagination">
            <button onClick={() => setPaginaAtual(paginaAtual - 1)} disabled={paginaAtual === 1}>←</button>
            {[...Array(totalPaginas)].map((_, i) => (
              <button 
                key={i} 
                className={paginaAtual === i + 1 ? "active" : ""}
                onClick={() => setPaginaAtual(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button onClick={() => setPaginaAtual(paginaAtual + 1)} disabled={paginaAtual === totalPaginas}>→</button>
          </div>
        </div>
      )}
    </>
  );  
};

export default Cards;
