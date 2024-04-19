import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Detalhes from './pages/detalhes/detalhes';
import Comentarios from './pages/comentarios/comentarios';



function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/fotos' element={<Fotos />}/>
            <Route path='/detalhes/:id' element={<Detalhes />}/>
            <Route path='/comentarios' element={<Comentarios />}/>
        </Routes>
    </BrowserRouter>
    )
}

export default App;
