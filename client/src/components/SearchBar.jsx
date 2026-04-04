function BarraBusqueda({onSearch}) {
     
     return (
          <>
               <input
               className="form-control me-2"
               type="text"
               placeholder="Buscar"
               onChange={(e) => onSearch(e.target.value)}/>
          </>
     )
}

export default BarraBusqueda;