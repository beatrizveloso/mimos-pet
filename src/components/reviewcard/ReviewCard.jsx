import "./ReviewCard.css";

const ReviewCard = ({ reviewer, rating, title, date, details, text, img, profile, onImageClick }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        {profile && (
          <img src={profile} alt="Foto de perfil" className="profile-img" />
        )}
        <strong>{reviewer}</strong>
      </div>
      <div className="review-rating">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="star">★</span>
        ))}
      </div>
      <h4 className="review-title">{title}</h4>
      <p className="review-date">{date}</p>
      <p className="review-details">{details}</p>
      <p className="review-text">{text}</p>

      {img && (
  <img
    src={img}
    alt={`Imagem da avaliação de ${reviewer}`}
    className="review-img"
    onClick={() => onImageClick && onImageClick({
      reviewer, rating, title, date, details, text, img, preview: img, profile
    })}
    style={{ cursor: 'pointer' }}
  />
)}

    </div>
  );
};

export default ReviewCard;
