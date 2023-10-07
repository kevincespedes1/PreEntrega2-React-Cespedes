import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Ofertas from './components/Ofertas'
import  Checkout  from './components/Checkout';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route path='category/:categoryId' element={<ItemListContainer />} />
        <Route path='item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' exact element={<Checkout/>}></Route>
        <Route path='/ofertas' element={<Ofertas/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App