import { Link } from 'react-router-dom';

function CardCentroCosto() {
     return (
     <>
          <div className="card" style={{width: "18rem"}}>
               <div className="card-body">
                    <h5 className="card-title">Financiera Efectiva</h5>
                    <Link to="/historial-inventarios">
                         <button className="btn btn-light card-link mt-3">
                              Ver reportes
                         </button>
                    </Link>
               </div>
          </div>
     </>
     )
}

export default CardCentroCosto;