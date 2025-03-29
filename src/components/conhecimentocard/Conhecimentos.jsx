import React from "react";
import "./ConhecimentoCard.css";
import ConhecimentoCard from "./ConhecimentoCard";

const conhecimentosData = [
  {
    id: 1,
    image: '/images/conhecimentos-1.png',
    tag: 'Informativo',
    title: 'Dono não, Tutor! Por que não se usa mais a palavra dono para o Pet?',
    description: 'Os tempos mudaram, e a forma como enxergamos nossos animais de estimação também! Hoje, não falamos mais em "dono", mas sim em "tutor", porque os pets não são objetos ou propriedades, e sim membros da família.',
  },
  {
    id: 2,
    image: '/images/conhecimentos-2.png',
    tag: 'Informativo',
    title: 'Pet Friendly: Dicas para Decorar seu Apartamento',
    description: 'Transformar seu apartamento em um ambiente pet friendly é mais simples do que parece. A chave está em escolher móveis e materiais que sejam duráveis e fáceis de limpar, como tecidos resistentes e pisos de cerâmica ou madeira.',
  },
  {
    id: 3,
    image: '/images/conhecimentos-3.png',
    tag: 'Informativo',
    title: 'Como dar comprimido para pets: dicas para não estressar seu pet!',
    description: 'Dar comprimido para cães e gatos pode ser desafiador, mas com paciência e algumas estratégias, é possível tornar o processo mais fácil e menos estressante para o seu pet.',
  },
];

const Conhecimentos = () => {
  return (
    <div className="align-conhecimentos">
      <div className="conhecimentos-text">
        <p>É pai de primeira viagem?</p>
        <h1>Veja Alguns Conhecimentos Úteis</h1>
      </div>

      <div className="conhecimentos-cards">
        {conhecimentosData.map((item, index) => (
          <ConhecimentoCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Conhecimentos;
