import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import CartWidget from './components/CartWidget';

function App() {

  return (
    <div>
      <Header/>
      <NavBar></NavBar>
      <CartWidget/>
      <ItemListContainer title="Bienvenido!"/>
    </div>
  );
}

export default App;
