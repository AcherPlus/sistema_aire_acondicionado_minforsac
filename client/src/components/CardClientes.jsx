function CardCliente({nombre, direccion, numero, onClick}) {
     return (
     <>
          <div className="card mb-3" style={{width: "25rem"}}>
               <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{numero}</p>
                    <p className="card-text">{direccion}</p>
                    <button className="btn btn-light card-link" onClick={() => onClick()}>
                         Ver sedes
                    </button> 
               </div>
          </div>
     </>
     )
}

export default CardCliente;