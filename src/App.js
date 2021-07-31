import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import { Footer } from './Footer/Footer';
import ProductList from './Product/ProductList';
function App() {
  return (
    <div className="App">
      <Header/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
