function BarraBusqueda({valor, onChange}) {
     
     return (
          <>
               <input
               className="form-control me-2"
               type="text"
               placeholder="Buscar"
               value={valor}
               onChange={(e) => onChange(e.target.value)}/>
          </>
     )
}

export default BarraBusqueda;