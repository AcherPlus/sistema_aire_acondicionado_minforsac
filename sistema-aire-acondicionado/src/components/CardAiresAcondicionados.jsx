function CardAireAconcionado() {
     return (
          <>
               <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                    <h5 className="card-title">General Eletric - Mini Split</h5>
                    <h6>Ubicación: Oficina 1101A</h6>
                    <p className="card-text">Capacidad: 12k | Gas: R-22</p>
                    <p className="card-text">ID: 1234567890</p>
                    <p className="card-text">Modelo: ABCDEFGHIJK</p>
                    <p className="card-text">Obs: Manto Preventivo</p>
                    <button className="btn btn-light card-link">
                         Editar
                    </button>
                    <button className="btn btn-light card-link">
                         Eliminar
                    </button>
                    </div>
               </div>
          </>
     )
}

export default CardAireAconcionado;