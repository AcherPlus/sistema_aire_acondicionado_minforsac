function CardAireAconcionado() {
     return (
          <>
               <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                    <h5 className="card-title">General Eletric - Mini Split</h5>
                    <h6 className="card-subtitle">Ubicación: Oficina 1101A</h6>
                    <p className="card-text">Capacidad: 12k | Gas: R-22</p>
                    <p className="card-text">ID: 1234567890</p>
                    <p className="card-text">Modelo: ABCDEFGHIJK</p>
                    <p className="card-text">Obs: Manto Preventivo</p>
                    <div className="d-flex">
                         <button className="btn btn-light card-link" style={{width: "50%"}}>
                         <i className="bi bi-pencil-square"></i>
                         </button>
                         <button className="btn btn-light card-link" style={{width: "50%"}}>
                         <i className="bi bi-trash-fill"></i>
                         </button>
                    </div>
                    </div>
               </div>
          </>
     )
}

export default CardAireAconcionado;