import { useState } from "react";

function ModalCrearCliente({ onClose, onActualizar }) {

     const [formData, setFormData] = useState({
          nombre: '',
          direccion_principal: '',
          tipo_documento: 'RUC',
          numero_documento: '',
     });

     const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     // Evento para Agregar Cliente
     const submitAgregarCliente = async (e) => {
          e.preventDefault();

          try {
               const response = await fetch('http://localhost:3001/clientes', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
               });

               if (response.ok) {
                    alert('Cliente guardado');
                    onActualizar();
                    onClose();
               } else {
                    const errorData = await response.json();
                    console.log('Error: ' + errorData.error);
               }
          } catch (err) {
               console.log('Error al enviar:', err);
          }
     };

     return (
          <>
               <div className="card" style={{ width: "27rem", height: "20rem" }}>
                    <div className="card-body d-flex flex-column justify-content-center">
                         <h5 className="card-title">Nueva empresa</h5>
                         <form action={submitAgregarCliente}>
                              <div className="my-3">
                                   <input name="nombre" type="text" className="form-control" placeholder="Nombre/Razón Social"
                                        onChange={handleChange} />
                              </div>
                              <div className="my-3">
                                   <input name="numero_documento" type="text" className="form-control" placeholder="Número de documento"
                                        onChange={handleChange} />
                              </div>
                              <div className="my-3">
                                   <input name="direccion_principal" type="text" className="form-control" placeholder="Dirección principal"
                                        onChange={handleChange} />
                              </div>
                              <div className="my-3 d-flex justify-content-center" >
                                   <button type="button" className="btn btn-light card-link" style={{ width: "50%" }} onClick={onClose}>
                                        Cancelar
                                   </button>
                                   <button type="submit" className="btn btn-light card-link" style={{ width: "50%" }} onClick={submitAgregarCliente}>
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