function BarraBusqueda({valor, onChange}) {
     
     return (
          <>
               <input
               className="form-control me-2"
               type="text"
               placeholder="Buscar"
               value={valor}
               style={{border: "1px solid black"}}
               onChange={(e) => onChange(e.target.value)}/>
          </>
     )
}

export default BarraBusqueda;