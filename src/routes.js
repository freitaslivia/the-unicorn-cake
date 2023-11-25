import './App.css';
import Alergias from './pages/Alergias';
import HeaderPage from './components/HeaderPage';
import BodyPage from './components/BodyPage';
import FooterPage from './components/FooterPage';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Consultas from './pages/Consultas';
import Exames from './pages/Exames';
import Medicamentos from './pages/Medicamentos';
import Login from './pages/Login';
import Senha from './pages/Senha';
import Cadastro from './pages/Cadastro';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/home" element={<BodyPage />}/>
          <Route path="/alergias" element={<Alergias />} />
          <Route path="/consultas" element={<Consultas />} />
          <Route path="/exames" element={<Exames />} />
          <Route path="/medicamentos" element={<Medicamentos />} />
          <Route path="/" element={<Login />} />
          <Route path="/senha" element={<Senha />} />
          <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

