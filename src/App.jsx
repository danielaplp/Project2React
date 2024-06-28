import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuemSomos from './pages/QuemSomos';
import OProjeto from './pages/OProjeto';
import AIlha from './pages/AIlha'
import Especies from './pages/Especies'
import Atividades from "./pages/Atividades";
import * as React from 'react'
import Homepage from './pages/Homepage';
import AddNewBird from './components/AddNewBird';
import BirdWatching from './pages/BirdWatching';
import FormBw from './components/FormBw';
import AtividadeDetail from './pages/AtividadesDetails';
import Footer from './components/Footer';




function App() {



  return (
    
    <div>

    <Navbar />
    
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/quemsomos' element={<QuemSomos />} />
      <Route path='/oprojeto' element={<OProjeto />} />
      <Route path='/aIlha' element={<AIlha />} />
      <Route path='/especies' element={<Especies/>} />
      <Route path='/especies/novaespecie' element={<AddNewBird />} />
      <Route path='/atividades' element={<Atividades />} />
      <Route path='/acoes' element={<Atividades />} />
      <Route path='/acoes/:atividadeId' 
    element={<AtividadeDetail />}/>
      <Route exact path="/birdwatching" element={<BirdWatching/> } />
      <Route exact path="/expedicao" element={<FormBw/> } />


    </Routes>

    <Footer />

    </div>
  )
}

export default App
