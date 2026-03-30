import CardCliente from "../components/CardClientes";
import ModalCrearCliente from "../components/ModalCrearCliente";

function MisClientes() {
     return (
     <>
          <h1>Mis clientes</h1>

          <div className="row mb-3">
               <div className="col-2">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#clienteModal">
                         Agregar cliente
                    </button>
               </div>
          </div>

          <div class="modal fade" id="clienteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style={{backgroundColor: "transparent", border:"0px transparent"}}>
                         <div class="modal-body d-flex justify-content-center align-items-center">
                              <ModalCrearCliente />
                         </div>
                    </div>
               </div>
          </div>

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