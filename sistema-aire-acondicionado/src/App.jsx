import './App.css'

function App() {
  
  return (
    <>
      <h1>Sistema de inventario de aire acondicionado</h1>
      
      <div className='input-group'>
        <label>Agregar empresa</label>
        <input type='text' className='form-control' placeholder='Nombre/Razón Social'></input>
        <button className='btn'>Crear</button>
      </div>
    </>
  )
}

export default App
