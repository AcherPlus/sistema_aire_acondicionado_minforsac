import './App.css'
import MisClientes from './pages/MisClientes'
import DatosCliente from './pages/DatosCliente'
import CrearReporte from './pages/CrearReporte'
import ReporteExitoso from './pages/ReporteExitoso'
import HistorialInventarios from './pages/HistorialInventarios'
import { Routes, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <>
      <Navbar className='ps-3'>
        <Navbar.Brand>
          Minforsac
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/">
            Mis clientes
          </Nav.Link>
          
          <Nav.Link href="/crear-reporte">
            Crear reportes
          </Nav.Link>

          <Nav.Link href="/historial-inventarios">
            Historial de inventarios
          </Nav.Link>
        </Nav>
      </Navbar>
      
      <div className="container vh-100 mt-3">
        <Routes>
          <Route path="/" element={<MisClientes/>}/>
          <Route path="/cliente/:id" element={<DatosCliente/>}/>
          <Route path="/crear-reporte" element={<CrearReporte/>}/> 
          <Route path="/reporte-exitoso" element={<ReporteExitoso/>}/>
          <Route path="/historial-inventarios" element={<HistorialInventarios />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
