
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/contacto' element={<div><h1>Contacto</h1><h2>En desarrollo</h2></div>}/>
          <Route path='/nosotros' element={<div><h1>Nosotros</h1><h2>En desarrollo</h2></div>}/>
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='/home' element={<ItemListContainer/>}/>
          <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
