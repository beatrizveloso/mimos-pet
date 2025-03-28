import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, image, title, category, size, price, isSearchResult = false }) => {
  return (
    <section className={`card ${isSearchResult ? 'search-card' : ''}`}>
      <div className="card-image-container">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <Link to={`/produtos/${id}`} className="card-link"> {/* Corrigido aqui */}
          <h1>{title}</h1>
        </Link>
        <div className="details">
          <p>{category}</p>
          <p>{size}</p>
        </div>
        <h1 className="price">{price}</h1>
      </div>
    </section>
  );
};

export default Card;
