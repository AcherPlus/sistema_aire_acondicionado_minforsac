import { Link } from 'react-router-dom';

function CardCliente() {
     return (
     <>
          <div className="card" style={{width: "18rem"}}>
               <div className="card-body">
                    <h5 className="card-title">CAJA HUANCAYO</h5>
                    <p className="card-text">R.U.C</p>
                    <p className="card-text">Dirección principal</p>
                    <Link to="/cliente">
                         <button className="btn btn-light card-link">
                              Ver sedes
                         </button> 
                    </Link>
               </div>
          </div>
     </>
     )
}

export default CardCliente;