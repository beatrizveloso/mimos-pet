import React, { useState, useEffect } from 'react';
import './Card.css';
import Card from './Card';

const Cards = ({ filtro, searchTerm, limit, paginated }) => {
  const produtosData = [
    { id: 1, image: '/images/ração-1.png', title: 'Ração Seca Para Gatos Adultos Carne', category: 'Alimentação', size: 'Tamanho: 2,7kg', price: 'R$42,42' },
    { id: 2, image: '/images/pipicat.png', title: 'Areia Higiênica Pipicat Classic Para Gatos', category: 'Higiene', size: 'Tamanho: 4kg', price: 'R$12,25' },
    { id: 3, image: '/images/mochila-cat.png', title: 'Transporte Mochila Pet Gatos E Cães', category: 'Transporte', size: 'Tamanho: Único', price: 'R$347,99' },
    { id: 4, image: '/images/bola-cravo.png', title: 'Brinquedo Bola Vinil com Cravo para Cães', category: 'Brinquedo', size: 'Tamanho: P', price: 'R$14,49' },
    { id: 5, image: '/images/brinquedo-ventosa.png', title: 'Brinquedo Corda Ventosa Morder Pet Cachorro Azul', category: 'Brinquedo', size: 'Tamanho: Único', price: 'R$19,30' },
    { id: 6, image: '/images/comedouro.png', title: 'Comedouro E Brinquedo Petball Mini Pet Games', category: 'Brinquedo', size: 'Tamanho: P', price: 'R$36,46' },
    { id: 7, image: '/images/shampoo-neutro.png', title: 'Shampoo Pet Clean Neutro para Cães e Gatos', category: 'Higiene', size: 'Tamanho: 700ml', price: 'R$17,90' },
    { id: 8, image: '/images/frango-galinha.png', title: 'Frango Galinha Borracha Morder Brinquedo Pet', category: 'Brinquedo', size: 'Tamanho: Único', price: 'R$19,60' },
    
    
    { id: 9, image: '/images/ração-2.png', title: 'Ração Golden Frango e Carne Gatos castrados', category: 'Alimentação', size: 'Tamanho: 10,1kg', price: 'R$141,21' },
    { id: 10, image: '/images/ração-3.png', title: 'Ração Special Cat Premium Para Gatos Adultos Castrados', category: 'Alimentação', size: 'Tamanho: 1kg', price: 'R$24,90' },
    { id: 11, image: '/images/ração-4.png', title: 'Gran Plus Ração Gatos Filhotes Frango e Arroz', category: 'Alimentação', size: 'Tamanho: 1kg', price: 'R$27,90' },
    { id: 12, image: '/images/ração-5.png', title: 'Ração para gatos Filhotes  Frango Leite Cenoura', category: 'Alimentação', size: 'Tamanho: 1kg', price: 'R$29,90' },
    { id: 13, image: '/images/ração-6.png', title: 'Ração Spert Cat Premium para Gatos Frango e Salmão', category: 'Alimentação', size: 'Tamanho: 10,1kg', price: 'R$149,84' },
    { id: 14, image: '/images/ração-7.png', title: 'Ração Golden Gatos Castrados Frango com Abóbora', category: 'Alimentação', size: 'Tamanho: 3kg', price: 'R$73,90' },
    { id: 15, image: '/images/ração-8.png', title: 'Ração Golden Gatos Castrados Salmão Premium', category: 'Alimentação', size: 'Tamanho: 10,1kg', price: 'R$167,10' },
    { id: 16, image: '/images/ração-9.png', title: 'Mandala Blend Gatos Adultos Carne e Frango', category: 'Alimentação', size: 'Tamanho: 10,1kg', price: 'R$109,90' },
    { id: 17, image: '/images/ração-10.png', title: 'Ração Gatos Castrados Salmão e Batata doce', category: 'Alimentação', size: 'Tamanho: 10,1kg', price: 'R$184,89' },
    { id: 18, image: '/images/ração-11.png', title: 'Ração Premier Gatos Adultos Castrados Frango ', category: 'Alimentação', size: 'Tamanho: 1,5kg', price: 'R$68,57' },
    { id: 19, image: '/images/ração-12.png', title: 'Ração Gatos Castrados Super Premium Pet Gold ', category: 'Alimentação', size: 'Tamanho: 10,1kg', price: 'R$124,29' },
    { id: 20, image: '/images/ração-13.png', title: 'Ração Magnus Mix Partículas Recheadas para Gatos Adultos ', category: 'Alimentação', size: 'Tamanho: 25kg', price: 'R$259,66' },
    { id: 21, image: '/images/ração-14.png', title: 'Ração Magnus Cat Premium Gatos Filhotes Mix de Sabores', category: 'Alimentação', size: 'Tamanho: 15kg', price: 'R$162,14' },
    { id: 22, image: '/images/ração-15.png', title: 'Ração Special Cat Gatos Adultos Carne', category: 'Alimentação', size: 'Tamanho: 20kg', price: 'R$238,90' },
    { id: 23, image: '/images/ração-16.png', title: 'Magnus Cat Premium Gatos Filhotes Carne E Frango', category: 'Alimentação', size: 'Tamanho: 10kg', price: 'R$162,12' },

    { id: 24, image: '/images/higiene-1.png', title: 'Kit Higiene Pocket Pet Clean para Cães e Gatos', category: 'Higiene', size: 'Tamanho: Único', price: 'R$59,90' },
    { id: 25, image: '/images/higiene-2.png', title: 'Fluído Desembaraçador Premium Cães', category: 'Higiene', size: 'Tamanho: 500ml', price: 'R$41,21' },
    { id: 26, image: '/images/higiene-3.png', title: 'Shampoo E Condicionador Pet Clean 5 Em 1 Para Cães', category: 'Higiene', size: 'Tamanho: 700ml', price: 'R$17,89' },
    { id: 27, image: '/images/higiene-4.png', title: 'Shampoo Cães Gatos Brilho Intenso Pelos Escuros', category: 'Higiene', size: 'Tamanho: 500ml', price: 'R$58,80' },
    { id: 28, image: '/images/higiene-5.png', title: 'Shampoo Limpeza Suave Pet Neutro Filhotes', category: 'Higiene', size: 'Tamanho: 500ml', price: 'R$57,40' },
    { id: 29, image: '/images/higiene-6.png', title: 'Fluido Desembaraçador Cães Gatos Pelos Longos', category: 'Higiene', size: 'Tamanho: 200ml', price: 'R$43,60' },
    { id: 30, image: '/images/higiene-7.png', title: 'Granado Shampoo Pet Neutro Todos os Tipos de Pelos', category: 'Higiene', size: 'Tamanho: 500ml', price: 'R$57,40' },
    { id: 31, image: '/images/higiene-8.png', title: 'Shampoo Pet Desembaraçador Pelos Longos', category: 'Higiene', size: 'Tamanho: 500ml', price: 'R$57,40' },
    { id: 32, image: '/images/higiene-9.png', title: 'Shampoo Pet Azul Pelos Claros Granado', category: 'Higiene', size: 'Tamanho: 500ml', price: 'R$55,90' },
    { id: 33, image: '/images/higiene-10.png', title: 'Shampoo e Condicionador 2 em 1 Genial Pet', category: 'Higiene', size: 'Tamanho: 500ml', price: 'R$22,90' },
    { id: 34, image: '/images/higiene-11.png', title: 'Shampoo K Dog Coco e Menta para Cães e Gatos', category: 'Higiene', size: 'Tamanho: 250ml', price: 'R$18,50' },
    { id: 35, image: '/images/higiene-12.png', title: 'Condicionador Beeps Hidratante Manteiga de Karité', category: 'Higiene', size: 'Tamanho: 480ml', price: 'R$41,61' },
    { id: 36, image: '/images/higiene-13.png', title: 'Condicionador Au.Migos Pets Todos os tipos de pelos', category: 'Higiene', size: 'Tamanho: 400ml', price: 'R$49,90' },
    { id: 37, image: '/images/higiene-14.png', title: 'Shampoo para Pet Au.Migos Pets 5 em 1', category: 'Higiene', size: 'Tamanho: 400ml', price: 'R$49,90' },
    { id: 38, image: '/images/higiene-15.png', title: 'Desembaraçador De Pelos Cachorro E Gatos Pet Clean', category: 'Higiene', size: 'Tamanho: 500ml', price: 'R$17,76' },
    { id: 39, image: '/images/higiene-16.png', title: 'Fluido Desembaraçador Pet Hydra Fluído', category: 'Higiene', size: 'Tamanho: 240ml', price: 'R$63,65' },
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
            id={produto.id} 
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
        <div className="pagination">
  <button onClick={() => setPaginaAtual(prev => Math.max(prev - 1, 1))} disabled={paginaAtual === 1}>
    Anterior
  </button>
  <span>Página <strong>{paginaAtual}</strong> de {totalPaginas}</span>
  <button onClick={() => setPaginaAtual(prev => Math.min(prev + 1, totalPaginas))} disabled={paginaAtual === totalPaginas}>
    Próxima
  </button>
        </div>
      )}
  


    </>
  );  
};

export default Cards;
