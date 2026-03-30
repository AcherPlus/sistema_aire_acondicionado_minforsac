import './App.css'
import MisClientes from './pages/MisClientes'
import DatosCliente from './pages/DatosCliente'
import CrearReporte from './pages/CrearReporte'
import ModalCrearCliente from './components/ModalCrearCliente'
import ModalCrearCentroCosto from './components/ModalCrearCentroCosto'
import ModalCrearSede from './components/ModalCrearSede'
import ReporteExitoso from './pages/ReporteExitoso'
import HistorialInventarios from './pages/HistorialInventarios'

function App() {
  return (
    <>
      <div className="container vh-100">
        <MisClientes/>
        <DatosCliente/>
        <CrearReporte/>
        <ReporteExitoso />
        <HistorialInventarios />
      </div>
    </>
  )
}

export default App
