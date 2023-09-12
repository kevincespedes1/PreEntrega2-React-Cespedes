import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={'Bienvenidos a mi negocio'} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi negocio'} />} />
        <Route path='/category/:categoryId/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App