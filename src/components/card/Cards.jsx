import React, { useState, useEffect } from 'react';
import './Card.css';
import Card from './Card';

const Cards = ({ filtro, searchTerm, limit, paginated }) => {
  const produtosData = [
    { id: 1, image: 'images/ração-1.png', title: 'Ração Seca Para Gatos Adultos Carne', category: 'Alimentação', size: 'Tamanho: 2,7kg', price: 'R$42,42' },
    { id: 2, image: 'images/pipicat.png', title: 'Areia Higiênica Pipicat Classic Para Gatos', category: 'Higiene', size: 'Tamanho: 4kg', price: 'R$12,25' },
    { id: 3, image: 'images/mochila-cat.png', title: 'Transporte Mochila Pet Gatos E Cães', category: 'Transporte', size: 'Tamanho: Único', price: 'R$347,99' },
    { id: 4, image: 'images/bola-cravo.png', title: 'Brinquedo Bola Vinil com Cravo para Cães', category: 'Brinquedo', size: 'Tamanho: P', price: 'R$14,49' },
    { id: 5, image: 'images/brinquedo-ventosa.png', title: 'Brinquedo Corda Ventosa Morder Pet Cachorro Azul', category: 'Brinquedo', size: 'Tamanho: Único', price: 'R$19,30' },
    { id: 6, image: 'images/comedouro.png', title: 'Comedouro E Brinquedo Petball Mini Pet Games', category: 'Brinquedo', size: 'Tamanho: P', price: 'R$36,46' },
    { id: 7, image: 'images/shampoo-neutro.png', title: 'Shampoo Pet Clean Neutro para Cães e Gatos', category: 'Higiene', size: 'Tamanho: 700ml', price: 'R$17,90' },
    { id: 8, image: 'images/frango-galinha.png', title: 'Frango Galinha Borracha Morder Brinquedo Pet', category: 'Brinquedo', size: 'Tamanho: Único', price: 'R$19,60' },
    
    { id: 9, image: 'images/ração-2.png', title: 'Ração Golden Frango e Carne Gatos castrados', category: 'Alimentação', size: 'Tamanho: 10,1kg', price: 'R$141,21' },
    { id: 10, image: 'images/ração-3.png', title: 'Ração Special Cat Premium Para Gatos Adultos Castrados', category: 'Alimentação', size: 'Tamanho: 1kg', price: 'R$24,90' },
    { id: 11, image: 'images/ração-4.png', title: 'Gran Plus Ração Gatos Filhotes Frango e Arroz', category: 'Alimentação', size: 'Tamanho: 1kg', price: 'R$27,90' },
    { id: 12, image: 'images/ração-5.png', title: 'Ração para gatos Filhotes  Frango Leite Cenoura', category: 'Alimentação', size: 'Tamanho: 1kg', price: 'R$29,90' },
    { id: 13, image: 'images/ração-6.png', title: 'Ração Spert Cat Premium para Gatos Frango e Salmão', category: 'Alimentação', size: 'Tamanho: 10,1kg', price: 'R$149,84' },
    { id: 14, image: 'images/ração-7.png', title: 'Ração Golden Gatos Castrados Frango com Abóbora', category: 'Alimentação', size: 'Tamanho: 3kg', price: 'R$73,90' },
    { id: 15, image: 'images/ração-8.png', title: 'Ração Golden Gatos Castrados Salmão Premium', category: 'Alimentação', size: 'Tamanho: 10,1kg', price: 'R$167,10' },
    { id: 16, image: 'images/ração-9.png', title: 'Mandala Blend Gatos Adultos Carne e Frango ', category: 'Alimentação', size: 'Tamanho: 10,1kg', price: 'R$109,90' },
    { id: 17, image: 'images/ração-10.png', title: 'Ração Gatos Castrados Salmão e Batata doce', category: 'Alimentação', size: 'Tamanho: 10,1kg', price: 'R$184,89' },
    { id: 18, image: 'images/ração-11.png', title: 'Ração Premier Gatos Adultos Castrados Frango ', category: 'Alimentação', size: 'Tamanho: 1,5kg', price: 'R$68,57' },
    { id: 19, image: 'images/ração-12.png', title: 'Ração Gatos Castrados Super Premium Pet Gold ', category: 'Alimentação', size: 'Tamanho: 10,1kg', price: 'R$124,29' },
    { id: 20, image: 'images/ração-13.png', title: 'Ração Magnus Mix Partículas Recheadas para Gatos Adultos ', category: 'Alimentação', size: 'Tamanho: 25kg', price: 'R$259,66' },
    { id: 21, image: 'images/ração-14.png', title: 'Ração Magnus Cat Premium Gatos Filhotes Mix de Sabores', category: 'Alimentação', size: 'Tamanho: 15kg', price: 'R$162,14' },
    { id: 22, image: 'images/ração-15.png', title: 'Ração Special Cat Gatos Adultos Carne', category: 'Alimentação', size: 'Tamanho: 20kg', price: 'R$238,90' },
    { id: 23, image: 'images/ração-16.png', title: 'Magnus Cat Premium Gatos Filhotes Carne E Frango', category: 'Alimentação', size: 'Tamanho: 10kg', price: 'R$162,12' },
    
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
            key={produto.id} 
            id={produto.id} // <-- Adicione essa linha
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
