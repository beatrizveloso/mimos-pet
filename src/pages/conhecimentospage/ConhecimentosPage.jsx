import './ConhecimentosPage.css';
import Header from "../../components/header/Header.jsx";
import Banner from '../../components/banner/Banner.jsx';
import ConhecimentoDetail from '../../components/conhecimentodetail/ConhecimentoDetail.jsx';
import Footer from '../../components/footer/Footer.jsx';

const ConhecimentosPage = () => {
  return (
    <div className='conhecimentospage-container'>
      <Header />
      <ConhecimentoDetail />
      <Footer />
    </div>
  );
};

export default ConhecimentosPage;
