import { Modal, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import FormAgregarAireAcondicionado from "./FormAgregarAireAcondicionado";
import './CardsAireAcondicionado.css';
import ModalEliminarAire from "./ModalEliminarAireAcondicionado";

function CardAireAconcionado() {
     
     // PARA MODALES
     // Verificar si está abierto el modal1
     const [showModalA, setShowModalA] = useState(false);
     const [showModalB, setShowModalB] = useState(false);
     
     
     return (
          <>
               <Card style={{width: "18rem"}} unmountedExit>
                    <Card.Body>
                         <Card.Title>General Eletric - Mini Split</Card.Title>
                         <Card.Text><b>Ubicación:</b> Oficina 1101A</Card.Text>
                         <Card.Text><b>Capacidad:</b> 12k | Gas: R-22</Card.Text>
                         <Card.Text><b>ID:</b> 1234567890</Card.Text>
                         <Card.Text><b>Modelo:</b> ABCDEFGHIJK</Card.Text>
                         <Card.Text><b>Obs:</b> Manto Preventivo</Card.Text>

                         <div className="d-flex justify-content-between">
                         <Button onClick={() => setShowModalA(true)} variant="light" className="button-edit">
                              <i className="bi bi-pencil-square"></i>
                         </Button>

                         <Modal show={showModalA} onHide={() => setShowModalA(false)} dialogClassName="custom-form">
                              <Modal.Body>
                                   <FormAgregarAireAcondicionado />
                              </Modal.Body>
                         </Modal>

                         <Button onClick={() => setShowModalB(true)} variant="light" className="button-delete">
                              <i className="bi bi-trash-fill"></i>
                         </Button>
                         
                        <Modal show={showModalB} onHide={() => setShowModalB(false)} dialogClassName="custom-form">
                              <Modal.Body>
                                   <ModalEliminarAire />
                              </Modal.Body>
                         </Modal>

                    </div>
                    </Card.Body>
               </Card>
               
               {/* <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                    <h5 className="card-title">General Eletric - Mini Split</h5>
                    <p className="card-text"><b>Ubicación:</b> Oficina 1101A</p>
                    <p className="card-text"><b>Capacidad:</b> 12k | Gas: R-22</p>
                    <p className="card-text"><b>ID:</b> 1234567890</p>
                    <p className="card-text"><b>Modelo:</b> ABCDEFGHIJK</p>
                    <p className="card-text"><b>Obs:</b> Manto Preventivo</p>
                    <div className="d-flex justify-content-between">
                         <Button onClick={handleShow} variant="light" className="button-edit">
                              <i className="bi bi-pencil-square"></i>
                         </Button>

                         <Modal show={show} onHide={handleClose} dialogClassName="custom-form">
                              <Modal.Body>
                                   <FormAgregarAireAcondicionado />
                              </Modal.Body>
                         </Modal>

                         <Button onClick={handleShow} variant="light" className="button-delete">
                              <i className="bi bi-trash-fill"></i>
                         </Button>
                         
                         <Modal show={show} onHide={handleClose} dialogClassName="custom-form">
                              <Modal.Body>
                                   <ModalEliminarAire />
                              </Modal.Body>
                         </Modal>
                    </div>
                    </div>
               </div> */}
          </>
     )
}

export default CardAireAconcionado;