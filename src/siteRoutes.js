
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import CorPrimaria from './pages/corPrimaria'
import Frequencia from './pages/frequencia'
import Ingresso from './pages/ingresso'
import MaiorNumero from './pages/maiorNumero'
import Soma from './pages/soma'
import Dobro from './pages/dobro'
import Media from './pages/media'
import Temperatura from './pages/temperatura'
import Tabuada from './pages/tabuada'

export default function SistemaRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='corPrimaria' element={<CorPrimaria />} />
                <Route path='frequencia' element={<Frequencia />} />
                <Route path='ingresso' element={<Ingresso />} />
                <Route path='maiorNumero' element={<MaiorNumero />} />
                <Route path='soma' element={<Soma />} />
                <Route path='dobro' element={<Dobro />} />
                <Route path='media' element={<Media />} />
                <Route path='temperatura' element={<Temperatura />} />
                <Route path='tabuada' element={<Tabuada />} />
            </Routes>
        </BrowserRouter>
    )
}