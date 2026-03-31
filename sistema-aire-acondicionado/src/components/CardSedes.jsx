import { Link } from 'react-router-dom';

function CardSede() {
     return (
     <>
          <div className="card" style={{width: "18rem"}}>
               <div className="card-body">
               <h5 className="card-title">OFICINA EL DERBY</h5>
               <p className="card-text">CALLE</p>
               <p className="card-text">DISTRITO</p>
               <p className="card-text">OFICINA - PISO</p>
               <Link to="/historial-inventarios">
                    <button className="btn btn-light card-link">
                         Ver reportes
                    </button>
               </Link>
               </div>
          </div>
     </>
     )
}

export default CardSede;