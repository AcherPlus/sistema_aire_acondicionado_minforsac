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
     const [dropdownTitles, setDropdownTitles] = useState({
          clientes: 'Seleccione un cliente',
          sedes: 'Seleccione una sede'
     });

     const handleSelect = (key, value) => {
          setDropdownTitles((prev) => ({
               ...prev,
               [key]: value, // Updates only the key matched
          }));
     };
     
     return(
          <>
               <h1>Crear reporte</h1>
               
               <div className="row my-3">
                    <h4 className="mb-3">Datos generales</h4>
                    <div className="col-3">
                         <DropdownButton id="drop-cliente" variant="light" title={dropdownTitles.clientes} onSelect={(e) => handleSelect('clientes', e)} style={{border: "1px solid black", borderRadius:"15px"}}>
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
                    </div>
                    <div className="col-3">
                         <DropdownButton id="drop-sede" variant="light" title={dropdownTitles.sedes} onSelect={(e) => handleSelect('sedes', e)} style={{border: "1px solid black", borderRadius:"15px"}}>
                              <Dropdown.Item eventKey="Sede 1">
                                   Sede 1
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="Sede 2">
                                   Sede 2
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="Sede 3">
                                   Sede 3
                              </Dropdown.Item>
                         </DropdownButton>
                    </div>
               </div>

               <div className="row">
                    <div className="col-4 d-flex my-3">
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