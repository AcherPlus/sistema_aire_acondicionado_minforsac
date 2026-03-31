import CardCliente from "../components/CardClientes";
import ModalCrearCliente from "../components/ModalCrearCliente";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function MisClientes() {
     // Verificar si está abierto el modal
     const [show, setShow] = useState(false);
     
     // Estados para cerrar y abrir el modal
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     
     return (
     <>
          <h1>Mis clientes</h1>
          
          <div className="row mb-3">
               <div className="col-2">
                    <Button onClick={handleShow} variant="primary">Agregar cliente</Button>
               </div>
          </div>

          <Modal show={show} onHide={handleClose} dialogClassName="custom-dialog">
               <Modal.Body>
                    <ModalCrearCliente />
               </Modal.Body>
          </Modal>

          <div className="row">
               <div className="col-3">
                    <CardCliente />
               </div>
               <div className="col-3">
                    <CardCliente />
               </div>
               <div className="col-3">
                    <CardCliente />
               </div>
               <div className="col-3">
                    <CardCliente />
               </div>
          </div>

     </>
     )
}
     
export default MisClientes;