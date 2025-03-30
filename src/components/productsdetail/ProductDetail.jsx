import React, { useState, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "../../context/CartContext"; // Importando o contexto do carrinho
import "./ProductDetail.css";

const produtosData = [
  {
    id: 1,
    image: "/images/ração-1.png",
    title: "Ração Seca Para Gatos Adultos Carne",
    category: "Alimentação",
    size: "2,7kg",
    price: "R$42,42",
    descricao: [
      "Indicada para gatos adultos a partir de 1 ano de idade.",
      "Ração premium 100% completa e balanceada.",
      "Nuggets crocantes com recheio macio e saboroso.",
      "Com prebióticos que contribuem para digestão saudável.",
      "Desenvolvida nutricionalmente em conjunto com veterinários.",
      "Com múltiplas fibras para promover a saúde gastrointestinal.",
      "Controle de minerais para manter o trato urinário saudável.",
      "Vitaminas e antioxidantes que ajudam o sistema imunológico.",
      "Ômega 6 e zinco para manter a pele e pelo saudáveis.",
      "Disponível em embalagens de 500 g, 900 g, 2,7 kg, 10,1 kg, leve 10,1kg e pague 9kg."
    ],
    composicao: "Farinha de Carne e Ossos de bovinos, Farinha de Vísceras..."
  },
  {
    id: 2,
    image: "/images/pipicat.png",
    title: "Areia Higiênica Pipicat Classic Para Gatos",
    category: "Higiene",
    size: "4kg",
    price: "R$12,25",
    descricao: ["Areia higiênica para gatos."],
    composicao: "Argila 100% natural."
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); // Obtendo a função do contexto
  const produto = produtosData.find(prod => prod.id === parseInt(id));
  const [quantidade, setQuantidade] = useState(1);

  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, visible: false });
  const imgRef = useRef(null);
  const zoom = 2.5; // Fator de zoom

  if (!produto) {
    return <h1>Produto não encontrado</h1>;
  }

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPos({ x, y, visible: true });
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div
          className="image-container"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setZoomPos({ ...zoomPos, visible: false })}
        >
          <img ref={imgRef} src={produto.image} alt={produto.title} className="product-image" />

          {zoomPos.visible && (
            <div
              className="zoom-box"
              style={{
                backgroundImage: `url(${produto.image})`,
                backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                backgroundSize: `${zoom * 100}%`
              }}
            />
          )}
        </div>

        <div className="product-info">
          <h1>{produto.title}</h1>
          <div className="avaliacao">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color="#FFD700" />
            ))}
            <span className="avaliacoes">(30 avaliações)</span>
            <span className="estoque">Em estoque</span>
          </div>

          <div className="quantidade-container">
            <button onClick={() => setQuantidade(q => Math.max(1, q - 1))}><FaMinus /></button>
            <span>{quantidade}</span>
            <button onClick={() => setQuantidade(q => q + 1)}><FaPlus /></button>
          </div>

          <h2>{produto.price}</h2>
          <button className="adicionar-carrinho" onClick={() => addToCart(produto, quantidade)}>
            Adicionar ao carrinho
          </button>

        </div>

        <div className="align-semelhantes">

        <div className="descricao-composicao">
          <h3>Descrição</h3>
          <div className="descricao">
            {produto.descricao.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          <hr />
          <h3>Composição</h3>
          <p className="composicao">{produto.composicao}</p>
        </div>

        <h3>Produtos Semelhantes:</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
