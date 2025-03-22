import React from 'react';
import './Card.css';

const Card = ({ image, title, category, size, price }) => {
  return (
    <section className="card">
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
  );
};

export default Card;
