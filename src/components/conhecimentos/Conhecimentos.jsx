import "../conhecimentos/Conhecimentos.css";

const Conhecimentos = () => {
    return (
        <div className="align-conhecimentos">
            <div className="conhecimentos-text">
                <p>É pai de primeira viagem?</p>
                <h1>Veja Alguns Conhecimentos Úteis</h1>
            </div>

            <div className="conhecimentos-cards">
                <div className="card-conhe">
                    <img src="images/conhecimentos-1.png" alt="Imagem do card" />
                    <div className="tag">Informativo</div>
                    <h1>Dono não, Tutor! Por que não se usa mais a palavra dono para o Pet?</h1>
                    <p>Os tempos mudaram, e a forma como enxergamos nossos animais de estimação também! Hoje, não falamos mais em “dono”, mas sim em “tutor”, porque os pets não são objetos ou propriedades, e sim membros da família.</p>
                </div>

                <div className="card-conhe">
                    <img src="images/conhecimentos-2.png" alt="Imagem do card" />
                    <div className="tag">Informativo</div>
                    <h1>Pet Friendly: Dicas para Decorar seu Apartamento</h1>
                    <p>Transformar seu apartamento em um ambiente pet friendly é mais simples do que parece. A chave está em escolher móveis e materiais que sejam duráveis e fáceis de limpar, como tecidos resistentes e pisos de cerâmica ou madeira.</p>
                </div>

                <div className="card-conhe">
                    <img src="images/conhecimentos-3.png" alt="Imagem do card" />
                    <div className="tag">Informativo</div>
                    <h1>Como dar comprimido para pets: dicas para não estressar seu pet!</h1>
                    <p>Dar comprimido para cães e gatos pode ser desafiador, mas com paciência e algumas estratégias, é possível tornar o processo mais fácil e menos estressante para o seu pet. </p>
                </div>
            </div>
        </div>
    );
};

export default Conhecimentos;
