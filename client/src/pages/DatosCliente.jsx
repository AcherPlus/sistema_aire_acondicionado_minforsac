import CardCentroCosto from "../components/CardCentrosCosto";
import CardSede from "../components/CardSedes";
import ModalCrearCentroCosto from "../components/ModalCrearCentroCosto";
import ModalCrearSede from "../components/ModalCrearSede";
import { Modal, Button } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

function DatosCliente() {
     
     // Verificar si está abierto el modal
     const [show, setShow] = useState(false);
     
     // Estados para cerrar y abrir el modal
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     /* RECOGER EL DATO DEL CLIENTE */
     const location = useLocation();
     const {nombre, numero_documento, direccion, cliente_id} = location.state || {}

     useEffect(() => {
          console.log("Datos recibidos:", { nombre, numero_documento, direccion });
     }, []);

     return (
     <>
          <h1>{nombre}</h1>
          
          <Tabs defaultActiveKey="sedes" className="mb-3" unmountOnExit>
               <Tab eventKey="sedes" title="Sedes">
                    <div className="row mb-3">
                         <div className="col-2">
                              <Button onClick={handleShow} variant="primary">Agregar sede</Button>
                         </div>
                    </div>

                    <Modal show={show} onHide={handleClose} dialogClassName="custom-dialog">
                         <Modal.Body>
                              <ModalCrearSede />
                         </Modal.Body>
                    </Modal>

                    <div className="row mb-3">
                         <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                              <CardSede />
                         </div>
                    </div>
               </Tab>
               <Tab eventKey="centros-costo" title="Centros de costo">
                    <div className="row mb-3">
                         <div className="col-3">
                              <Button onClick={handleShow} variant="primary">Agregar centro</Button>
                         </div>
                    </div>

                    <Modal show={show} onHide={handleClose} dialogClassName="custom-dialog">
                         <Modal.Body>
                              <ModalCrearCentroCosto />
                         </Modal.Body>
                    </Modal>

                    <div className="row mb-3">
                         <div className="col-3 d-flex justify-content-center">
                              <CardCentroCosto />
                         </div>
                         <div className="col-3 d-flex justify-content-center">
                              <CardCentroCosto />
                         </div>
                         <div className="col-3 d-flex justify-content-center">
                              <CardCentroCosto />
                         </div>
                         <div className="col-3 d-flex justify-content-center">
                              <CardCentroCosto />
                         </div>
                    </div>
               </Tab>
          </Tabs>       
     </>
     )
}
     
export default DatosCliente;