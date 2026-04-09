import CardCentroCosto from "../components/CardCentrosCosto";
import CardSede from "../components/CardSedes";
import ModalCrearCentroCosto from "../components/ModalCrearCentroCosto";
import ModalCrearSede from "../components/ModalCrearSede";
import "./DatosClientes.css";
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
     const { nombre, cliente_id } = location.state || {}

     /* PARA LOS CLIENTES */
     const [sedes, setSedes] = useState([]);

     // Función para obtener los clientes
     const obtenerSedesCliente = () => {
          fetch(`http://localhost:3001/cliente/${cliente_id}`)
               .then(res => {
                    if (res.status === 204) return [];
                    return res.json();
               })
               .then(data => {
                    setSedes(data)
               })
               .catch(err => console.error("Error cargando clientes: ", err));
     }

     console.log(sedes);

     useEffect(() => {
          // console.log("Datos recibidos:", { nombre, numero_documento, direccion });
          obtenerSedesCliente();
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
                              {sedes.map(s => {
                                   return (
                                        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center" key={s.sede_id}>
                                             <CardSede sede={s}/>
                                        </div>
                                   )
                              })}
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