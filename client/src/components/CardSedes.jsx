import { Link } from 'react-router-dom';

function CardSede({sede}) {
     
     return (
     <>
          <div className="card" style={{width: "18rem"}}>
               <div className="card-body">
               <h5 className="card-title">{sede.nombre}</h5>
               <p className="card-text">{sede.direccion}</p>
               <p className="card-text">{sede.distrito}</p>
               <p className="card-text">{sede.oficina_piso}</p>
               <div className='d-flex justify-content-between'>
                    <Link to="/historial-inventarios">
                         <button className="btn btn-light card-link">
                              Ver reportes
                         </button>
                    </Link>
                    <Link to="/crear-reporte">
                         <button className="btn btn-light card-link">
                              Crear reporte
                         </button>
                    </Link>
               </div>
               </div>
          </div>
     </>
     )
}

export default CardSede;