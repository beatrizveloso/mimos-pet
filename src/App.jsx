import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Produtos from './components/produtos/Produtos.jsx';
import Cards from './components/card/Cards.jsx';
import Apoiadores from './components/apoiadores/Apoiadores.jsx';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Produtos />
      <Cards />
      <Apoiadores />
      
    </>
  );
};

export default App;