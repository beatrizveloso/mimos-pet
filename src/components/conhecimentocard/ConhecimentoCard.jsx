import React from 'react';
import { Link } from 'react-router-dom';
import './ConhecimentoCard.css';

const ConhecimentoCard = ({ id, image, tag, title, description }) => {
  return (
    <Link to={`/conhecimentos/${id}`} className="card-link"> 
      <div className="card-conhe">
        <img src={image} alt={title} />
        <div className="tag">{tag}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ConhecimentoCard;
