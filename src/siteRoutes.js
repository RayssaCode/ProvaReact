
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import CorPrimaria from './pages/corPrimaria'
import Frequencia from './pages/'
import Ingresso from './pages/ingresso'
import MaiorNumero from './pages/maiorNumero'

export default function SistemaRoutes() {
    return (
        <BrowserRouter>
            <Router>
                <Route path='/' element={<Home />} />
                <Route path='corPrimaria' element={<CorPrimaria />} />
                <Route path='/' element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='/' element={<Home />} />
            </Router>
        </BrowserRouter>
    )
}