import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, image, title, category, size, price, isSearchResult = false }) => {
  return (
        <Link to={`/produtos/${id}`} className="card-link"> {/* Corrigido aqui */}
    <section className={`card ${isSearchResult ? 'search-card' : ''}`}>
      <div className="card-image-container">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
          <h1>{title}</h1>
        <div className="details">
          <p>{category}</p>
          <p>{size}</p>
        </div>
        <h1 className="price">{price}</h1>
      </div>
    </section>
        </Link>
  );
};

export default Card;
