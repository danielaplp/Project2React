import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuemSomos from './pages/QuemSomos';
import OProjeto from './pages/OProjeto';
import AIlha from './pages/AIlha'
import Especies from './pages/Especies'
import Atividades from "./pages/Atividades";
import * as React from 'react'
import avesData from './db.json'
import { useState } from 'react';



function App() {

  const [avesNoronha, setAvesNoronha] = useState(avesData)

  return (
    <div className="App">

    <Navbar />
    
    
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/quemsomos' element={<QuemSomos />} />
      <Route path='/oprojeto' element={<OProjeto />} />
      <Route path='/aIlha' element={<AIlha />} />
      <Route path='/especies' element={<Especies/>} />
      <Route path='/atividades' element={<Atividades />} />

    </Routes>
    </div>
  )
}

export default App
