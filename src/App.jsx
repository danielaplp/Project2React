import { Routes, Route } from 'react-router-dom';
import Navbar from "./pages/components/components/navbar";
import QuemSomos from "./pages/components/pages/QuemSomos";
import OProjeto from "./pages/components/pages/OProjeto";
import AIlha from "./pages/components/pages/AIlha";
import Especies from "./pages/components/pages/Especies";
import Atividades from "./pages/components/pages/Atividades";

function App() {

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
