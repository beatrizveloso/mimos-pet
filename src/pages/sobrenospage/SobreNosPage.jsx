import './SobreNosPage.css';
import Header from "../../components/header/Header.jsx";
import Footer from '../../components/footer/Footer.jsx';

const SobreNosPage = () => {
  return (
    <div className='sobrenos-container'>
      <Header />

      <main className="sobrenos-content">
        <section className="sobrenos-hero">
          <h1 className="sobrenos-titulo">Sobre o <span>Mimo's Pet</span></h1>
          <p className="sobrenos-texto">Amor, cuidado e qualidade para seu pet!</p>
        </section>

        <section className="sobrenos-text">
          <h2 className="sobrenos-titulo">Nossa História</h2>
          <p className="sobrenos-texto">
            O Mimo's Pet nasceu do amor incondicional pelos animais. Fundado por apaixonados por pets, nosso e-commerce surgiu para oferecer produtos de alta qualidade, carinho e inovação para cães, gatos, peixes e outros companheiros de estimação. Acreditamos que cada pet merece ser tratado como parte da família, e é por isso que selecionamos com carinho cada item do nosso catálogo.
          </p>

          <h2 className="sobrenos-titulo"><span>O que oferecemos</span></h2>
          <p className="sobrenos-texto">
            Nosso site reúne uma grande variedade de produtos, desde rações premium, acessórios, brinquedos, itens de higiene e saúde, até soluções em transporte e aquarismo. Tudo foi escolhido pensando no bem-estar, na segurança e na felicidade dos seus animais de estimação.
          </p>

          <h2 className="sobrenos-titulo">Nosso Compromisso</h2>
          <p className="sobrenos-texto">
            No Mimo's Pet, nosso compromisso é garantir a sua satisfação e a alegria do seu pet. Trabalhamos com entrega rápida, atendimento dedicado e sempre buscamos trazer as últimas novidades do mundo pet. Nosso objetivo é proporcionar praticidade para você e muito amor para seu amigo de quatro patas.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SobreNosPage;
