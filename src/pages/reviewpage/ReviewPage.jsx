import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../../components/header/Header";
import ReviewCard from "../../components/reviewcard/ReviewCard";
import "./ReviewPage.css";

const ReviewPage = () => {
    const [reviews, setReviews] = useState([
        {
            reviewer: "Antônio",
            rating: 5,
            title: "Grão de qualidade",
            date: "Avaliado no Brasil em 30 de março de 2025",
            details: "Sabor: Peixe",
            text: "Já coloquei no pote, pedi para vir na embalagem da Amazon, e veio numa caixa, bem protegido. Adorei!",
            img: "/images/ração-ava-1.jpg",
            preview: "/images/ração-ava-1.jpg",
            profile: "/images/profile.jpg",
        },
        {
            reviewer: "Carlos",
            rating: 4,
            title: "Super indico!",
            date: "Avaliado no Brasil em 10 de abril de 2025",
            details: "Sabor: Peixe",
            text: "Saiu mais em conta do que na minha cidade.",
            img: "/images/ração-ava-2.jpg",
            preview: "/images/ração-ava-2.jpg",
            profile: "/images/profile.jpg",
        },
        {
            reviewer: "Júlia",
            rating: 3,
            title: "Satisfeita",
            date: "Avaliado no Brasil em 12 de abril de 2025",
            details: "Sabor: Peixe",
            text: "Deveria chegar mais rápido, mas mesmo assim estou satisfeita. Comprarei mais vezes.",
            img: "/images/ração-ava-3.jpg",
            preview: "/images/ração-ava-3.jpg",
            profile: "/images/profile.jpg",
        },
    ]);

    const [form, setForm] = useState({
        reviewer: "",
        rating: 5,
        title: "",
        date: "",
        details: "",
        text: "",
        img: null,
        preview: null,
        profile: "",
    });

    const [selectedImage, setSelectedImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm((prev) => ({
                ...prev,
                img: file,
                preview: URL.createObjectURL(file),
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setReviews((prev) => [...prev, form]);
        setForm({
            reviewer: "",
            rating: 5,
            title: "",
            date: "",
            details: "",
            text: "",
            img: null,
            preview: null,
            profile: "",
        });
    };

    const handleImageClick = (review) => {
        setSelectedImage(review);
    };

    const renderStars = (count) => {
        return [...Array(count)].map((_, i) => (
            <span key={i} className="star">★</span>
        ));
    };

    const ratingData = useMemo(() => {
        const total = reviews.length;
        const countByRating = [0, 0, 0, 0, 0];
        reviews.forEach((r) => {
            countByRating[r.rating - 1]++;
        });

        return countByRating
            .map((count, i) => ({
                stars: i + 1,
                percent: total > 0 ? Math.round((count / total) * 100) : 0,
            }))
            .reverse();
    }, [reviews]);

    return (
        <>
            <div className="review-page">
                <Header />
                <div className="review-summary">
                    <h2>Avaliações de clientes</h2>
                    <div className="stars-container">
                        {renderStars(5)}
                        <span className="average">
                            {(
                                reviews.reduce((sum, r) => sum + Number(r.rating), 0) / reviews.length || 0
                            ).toFixed(1)}{" "}
                            de 5
                        </span>
                    </div>
                    <p className="total">{reviews.length} avaliações globais</p>

                    {ratingData.map(({ stars, percent }) => (
                        <div key={stars} className="star-bar">
                            <span>{stars} estrelas</span>
                            <div className="bar-bg">
                                <div className="bar-fill" style={{ width: `${percent}%` }}></div>
                            </div>
                            <span>{percent}%</span>
                        </div>
                    ))}
                </div>

                <div className="review-content">
                    <h2>Avaliações com imagens</h2>
                    <div className="image-gallery">
                        {reviews
                            .filter((r) => r.preview)
                            .map((r, i) => (
                                <img
                                    key={i}
                                    src={r.preview}
                                    alt={`Imagem de ${r.reviewer}`}
                                    onClick={() => handleImageClick(r)}
                                />
                            ))}
                    </div>

                    {selectedImage && (
                        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <button className="modal-close" onClick={() => setSelectedImage(null)}>&times;</button>
                                <img
                                    src={selectedImage.preview || selectedImage.img}
                                    alt="Imagem ampliada"
                                    className="modal-image"
                                />
                                <div className="modal-review">
                                    <div className="modal-review-header">
                                        {selectedImage.profile && (
                                            <img
                                                src={selectedImage.profile}
                                                alt="Foto de perfil"
                                                className="profile-picture"
                                            />
                                        )}
                                        <strong>{selectedImage.reviewer}</strong>
                                    </div>
                                    <div className="modal-review-rating">
                                        {renderStars(Number(selectedImage.rating))}
                                    </div>
                                    <h3>{selectedImage.title}</h3>
                                    <p className="modal-date">{selectedImage.date}</p>
                                    <p className="modal-details">{selectedImage.details}</p>
                                    <p className="modal-text">{selectedImage.text}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <h3>Principais avaliações</h3>
                    {reviews.map((review, i) => (
                        <ReviewCard
                            key={i}
                            {...review}
                            img={review.preview || review.img}
                            profile={review.profile}
                            onImageClick={handleImageClick}
                        />
                    ))}

                    <div className="form-container">
                        <h3>Escreva sua avaliação</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="reviewer"
                                placeholder="Seu nome"
                                value={form.reviewer}
                                onChange={handleChange}
                                required
                            />
                            <input
                                name="title"
                                placeholder="Título da avaliação"
                                value={form.title}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="text"
                                placeholder="Sua avaliação"
                                value={form.text}
                                onChange={handleChange}
                                required
                            />
                            <input
                                name="date"
                                placeholder="Data (ex: 20 de abril de 2025)"
                                value={form.date}
                                onChange={handleChange}
                            />
                            <input
                                name="details"
                                placeholder="Detalhes (ex: Cor, Sabor)"
                                value={form.details}
                                onChange={handleChange}
                            />
                            <label>Imagem da avaliação:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />

                            {form.preview && (
                                <img src={form.preview} alt="Preview" className="image-preview" />
                            )}

                            <label>Link da imagem de perfil:</label>
                            <input
                                name="profile"
                                placeholder="URL da imagem de perfil"
                                value={form.profile}
                                onChange={handleChange}
                            />

                            <label>Nota (1 a 5):</label>
                            <input
                                type="number"
                                name="rating"
                                min="1"
                                max="5"
                                value={form.rating}
                                onChange={handleChange}
                                required
                            />

                            <button type="submit">Enviar Avaliação</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewPage;
