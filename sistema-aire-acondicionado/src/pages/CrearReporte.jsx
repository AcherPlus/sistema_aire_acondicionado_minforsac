import CardAireAconcionado from "../components/CardAiresAcondicionados"
import FormAgregarAireAcondicionado from "../components/FormAgregarAireAcondicionado"
import { Modal, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import '../components/FormsAgregarAireAcondicionado.css'

function CrearReporte() {
     
     // PARA MODALES
     // Verificar si está abierto el modal
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     // PARA DROPDOWNS
     const textoDropdownTipo = ["un cliente", "una sede"]
     const [dropdownTitle, setDropdownTitle] = useState(`Seleccione`);

     const handleSelect = (eventKey, event) => {
          setDropdownTitle(eventKey);
     };
     
     return(
          <>
               <h1>Crear reporte</h1>
               
               <div className="row mb-3">
                    <div className="col-3">
                         <DropdownButton id="cliente-dropdown" variant="light" title={dropdownTitle} onSelect={handleSelect}>
                              <Dropdown.Item eventKey="Cliente 1">
                                   Cliente 1
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="Cliente 2">
                                   Cliente 2
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="Cliente 3">
                                   Cliente 3
                              </Dropdown.Item>
                         </DropdownButton>
                         
                         
                         {/* <Dropdown title={dropdownTitle} onSelect={handleSelect}>
                              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{width: "100%", border:"1px solid black"}}>
                                   Seleccione un cliente
                              </Dropdown.Toggle>

                              <Dropdown.Menu style={{width: "100%"}}>
                                   <Dropdown.Item eventKey="Cliente 1">
                                        Cliente 1
                                   </Dropdown.Item>
                                   <Dropdown.Item>
                                        Cliente 2
                                   </Dropdown.Item>
                                   <Dropdown.Item>
                                        Cliente 3
                                   </Dropdown.Item>
                              </Dropdown.Menu>
                         </Dropdown> */}
                    </div>
                    <div className="col-3">
                         <Dropdown>
                              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{width: "100%", border:"1px solid black"}}>
                                   Seleccione una sede
                              </Dropdown.Toggle>

                              <Dropdown.Menu style={{width: "100%", border:"1px solid black"}}>
                                   <Dropdown.Item>
                                        Sede 1
                                   </Dropdown.Item>
                                   <Dropdown.Item>
                                        Sede 2
                                   </Dropdown.Item>
                                   <Dropdown.Item>
                                        Sede 3
                                   </Dropdown.Item>
                              </Dropdown.Menu>
                         </Dropdown>
                    </div>
               </div>

               <div className="row">
                    <div className="col-4 d-flex">
                         <h4>Aires acondicionados</h4>
                         <Button onClick={handleShow} variant="primary" className="ms-3">
                              Agregar
                         </Button>
                    </div>
               </div>

               <Modal show={show} onHide={handleClose} dialogClassName="custom-form">
                    <Modal.Body>
                         <FormAgregarAireAcondicionado />
                    </Modal.Body>
               </Modal>

               <div className="row my-3">
                    <div className="col-3 d-flex justify-content-center">
                         <CardAireAconcionado />
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                         <CardAireAconcionado />
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                         <CardAireAconcionado />
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                         <CardAireAconcionado />
                    </div>
               </div>

               <div className="d-flex justify-content-center">
                    <button className="btn btn-light my-3" style={{border: "1px solid black"}}>
                         Crear reporte
                    </button>
               </div>

               
          </>
     )
}

export default CrearReporte;