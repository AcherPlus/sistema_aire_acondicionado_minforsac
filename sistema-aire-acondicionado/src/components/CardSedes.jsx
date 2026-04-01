import { Link } from 'react-router-dom';

function CardSede() {
     return (
     <>
          <div className="card" style={{width: "18rem"}}>
               <div className="card-body">
               <h5 className="card-title">OFICINA EL ANTIDERBY</h5>
               <p className="card-text">CALLE</p>
               <p className="card-text">DISTRITO</p>
               <p className="card-text">OFICINA - PISO</p>
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