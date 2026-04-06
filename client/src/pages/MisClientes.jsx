import CardCliente from "../components/CardClientes";
import ModalCrearCliente from "../components/ModalCrearCliente";
import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import PaginacionAvanzada from "../components/Pagination";
import BarraBusqueda from "../components/SearchBar";

function MisClientes() {
     // ------------------------------------------------

     /* PARA EL MODAL */
     const [show, setShow] = useState(false); // Verificar si está abierto el modal

     // Estados para cerrar y abrir el modal
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     // ------------------------------------------------

     /* PARA LOS CLIENTES */
     const [clientes, setClientes] = useState([]);

     useEffect(() => {
          fetch('http://localhost:3001/clientes')
               .then(res => {
                    if (res.status === 204) return [];
                    return res.json();
               })
               .then(data => {
                    setClientes(data)
               })
               .catch(err => console.error("Error cargando clientes: ", err));
     }, []);

     // ------------------------------------------------

     /* PARA LA PAGINACIÓN */
     // Estados de la paginación
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 9;

     // Lógica de filtrado (Slicing)
     const indexOfLastItem = currentPage * itemsPerPage;
     const indexOfFirstItem = indexOfLastItem - itemsPerPage;

     // Ejecutar fuera del componente de paginación
     const handlePageChange = (page) => {
          // console.log("Cambiando a la página: ", page);
          setCurrentPage(page);
     }

     // ------------------------------------------------

     /* PARA LA BÚSQUEDA */
     const [busqueda, setBusqueda] = useState('');
     // Lógica de filtrado
     const filteredData = clientes.filter(item => item.nombre.toLowerCase().includes(busqueda.toLowerCase()));
     const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
     const totalPages = Math.ceil(filteredData.length / itemsPerPage);

     // ------------------------------------------------

     return (
          <>
               <div className="row">
                    <div className="col-12 col-md-6 col-lg-5 d-flex mb-3">
                         <h1>Mis clientes</h1>
                         <div className="d-flex align-items-center">
                              <Button onClick={handleShow} variant="primary" className="ms-3">Agregar cliente</Button>
                         </div>
                    </div>
               </div>

               <Modal show={show} onHide={handleClose} dialogClassName="custom-dialog">
                    <Modal.Body>
                         <ModalCrearCliente />
                    </Modal.Body>
               </Modal>

               <div className="row mb-3 d-flex justify-content-center">
                    <div className="col-8 mb-3 ">
                         <BarraBusqueda valor={busqueda} onChange={setBusqueda} />
                    </div>
               </div>


               <div className="row">
                    {currentItems.map(c => {
                         return (
                              <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex justify-content-center" key={c.cliente_id}>
                                   <CardCliente nombre={c.nombre} direccion={c.direccion_principal} numero={c.numero_documento} />
                              </div>
                         )
                    })}
               </div>

               <div className="row my-3">
                    <div className="col-12 d-flex justify-content-center">
                         <PaginacionAvanzada current={currentPage} total={totalPages} onChange={handlePageChange} />
                    </div>
               </div>
          </>
     )
}

export default MisClientes;