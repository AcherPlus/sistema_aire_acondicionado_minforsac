import { Link } from 'react-router-dom';

function CardCliente({nombre, direccion, numero}) {
     return (
     <>
          <div className="card mb-3" style={{width: "25rem"}}>
               <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{numero}</p>
                    <p className="card-text">{direccion}</p>
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