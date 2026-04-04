import { useState } from "react";

function ModalCrearCliente(){
     
     const [nombreCliente, setNombreCliente] = useState('');
     const [numeroDocumento, setNumeroDocumento] = useState('');
     const [direccionPrincipal, setDireccionPrincipal] = useState('');

     // Evento para Agregar Cliente
     const submitAgregarCliente = (formData) => {
          const data = Object.fromEntries(formData.entries());
          console.log(data);
     }
     
     return (
          <>
               <div className="card" style={{width: "27rem", height: "20rem"}}>
                    <div className="card-body d-flex flex-column justify-content-center">
                         <h5 className="card-title">Nueva empresa</h5>
                         <form action={submitAgregarCliente}>
                              <div className="my-3">
                                   <input name="nombre" type="text" className="form-control" placeholder="Nombre/Razón Social" />
                              </div>
                              <div className="my-3">
                                   <input name="numero_documento" type="text" className="form-control" placeholder="Número de documento" />
                              </div>
                              <div className="my-3">
                                   <input name="direccion" type="text" className="form-control" placeholder="Dirección principal" />
                              </div>
                              <div className="my-3 d-flex justify-content-center" >
                                   <button type="submit" className="btn btn-light card-link" style={{width: "50%"}} onClick={submitAgregarCliente}>
                                        Crear
                                   </button>
                              </div>
                         </form>                         
                    </div>
               </div>
          </>
     )
}

export default ModalCrearCliente;