import './App.css'
import MisClientes from './pages/MisClientes'
import DatosCliente from './pages/DatosCliente'
import CrearReporte from './pages/CrearReporte'
import ReporteExitoso from './pages/ReporteExitoso'
import HistorialInventarios from './pages/HistorialInventarios'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container vh-100">
        <Routes>
          <Route path="/" element={<MisClientes/>}/>
          <Route path="/cliente" element={<DatosCliente/>}/>
          <Route path="/crear-reporte" element={<CrearReporte/>}/> 
          <Route path="/reporte-exitoso" element={<ReporteExitoso/>}/>
          <Route path="/historial-inventarios" element={<HistorialInventarios />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
