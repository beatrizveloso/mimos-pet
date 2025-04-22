import "./PagamentoPage.css";
import Header from "../../components/header/Header";
import Pagamento from "../../components/pagamento/Pagamento";
import Footer from "../../components/footer/Footer";

const PagamentoPage = () => {
  return (
    <div className="pagamento-page-container">
      <Header />
      <Pagamento />
      <Footer />
    </div>
  );
};

export default PagamentoPage;
