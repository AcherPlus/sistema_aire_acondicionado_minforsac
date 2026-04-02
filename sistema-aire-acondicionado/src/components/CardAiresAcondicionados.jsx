import { Button } from "react-bootstrap";
import './CardsAireAcondicionado.css';

function CardAireAconcionado() {
     return (
          <>
               <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                    <h5 className="card-title">General Eletric - Mini Split</h5>
                    <p className="card-text"><b>Ubicación:</b> Oficina 1101A</p>
                    <p className="card-text"><b>Capacidad:</b> 12k | Gas: R-22</p>
                    <p className="card-text"><b>ID:</b> 1234567890</p>
                    <p className="card-text"><b>Modelo:</b> ABCDEFGHIJK</p>
                    <p className="card-text"><b>Obs:</b> Manto Preventivo</p>
                    <div className="d-flex justify-content-between">
                         <Button variant="light" className="button-edit">
                              <i className="bi bi-pencil-square"></i>
                         </Button>

                         <Button variant="light" className="button-delete">
                              <i className="bi bi-trash-fill"></i>
                         </Button>
                    </div>
                    </div>
               </div>
          </>
     )
}

export default CardAireAconcionado;