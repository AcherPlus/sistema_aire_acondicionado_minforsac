import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

function FormAgregarAireAcondicionado(){
     
     // PARA DROPDOWNS
     const [dropdownTitles, setDropdownTitles] = useState({
          centro_costo: 'Centro de costo',
          tipo: 'Tipo',
          capacidad: 'Capacidad',
          estado: 'Estado',
          refrigeracion: 'Refrigeración',
          voltaje_compresor: 'Voltaje del compresor',
          presion: 'Presión'
     });

     const handleSelect = (key, value) => {
          setDropdownTitles((prev) => ({
               ...prev,
               [key]: value, // Updates only the key matched
          }));
     };
     
     const submitAgregarAireAcondicionado = (e) => {
          e.preventDefault();
          console.log("Botón funcionando");
     }

     return (
          <>
          <div className="card" style={{width: "100%"}}>
               <div className="card-body m-3">
                    <form>
                         <div className="my-3">
                              <h6 className="card-subtitle mt-3">1- Identificación</h6>
                              
                              <div className="row my-3">
                                   <div className="col-4 ">
                                        
                                        <input type="text" className="form-control" placeholder="Marca" id="exampleInputText1" aria-describedby="TextHelp"/>
                                   </div>
                                   <div className="col-4">
                                        <input type="text" className="form-control" placeholder="Inventario" id="exampleInputText1" aria-describedby="TextHelp"/>
                                   </div>
                                   <div className="col-4">
                                        <DropdownButton id="drop-centro-costo" variant="light" title={dropdownTitles.centro_costo} onSelect={(e) => handleSelect('centro_costo', e)} style={{border: "1px solid black", borderRadius:"15px"}}>
                                             <Dropdown.Item eventKey="Centro de costo 1">
                                                  Centro de costo 1
                                             </Dropdown.Item>
                                             <Dropdown.Item eventKey="Centro de costo 2">
                                                  Centro de costo 2
                                             </Dropdown.Item>
                                             <Dropdown.Item eventKey="Centro de costo 3">
                                                  Centro de costo 3
                                             </Dropdown.Item>
                                        </DropdownButton>
                                   </div>
                              </div>

                              <div className="row">
                                   <div className="col-4">
                                        <input type="text" className="form-control" placeholder="Ubicación" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                                   </div>

                                   <div className="col-4">
                                        <DropdownButton id="drop-tipo" variant="light" title={dropdownTitles.tipo} onSelect={(e) => handleSelect('tipo', e)} style={{border: "1px solid black", borderRadius:"15px"}}>
                                             <Dropdown.Item eventKey="Tipo 1">
                                                  Tipo 1
                                             </Dropdown.Item>
                                             <Dropdown.Item eventKey="Tipo 2">
                                                  Tipo 2
                                             </Dropdown.Item>
                                             <Dropdown.Item eventKey="Tipo 3">
                                                  Tipo 3
                                             </Dropdown.Item>
                                        </DropdownButton>
                                   </div>

                                   <div className="col-4">
                                        <DropdownButton id="drop-capacidad" variant="light" title={dropdownTitles.capacidad} onSelect={(e) => handleSelect('capacidad', e)} style={{border: "1px solid black", borderRadius:"15px"}}>
                                             <Dropdown.Item eventKey="Capacidad 1">
                                                  Capacidad 1
                                             </Dropdown.Item>
                                             <Dropdown.Item eventKey="Capacidad 2">
                                                  Capacidad 2
                                             </Dropdown.Item>
                                             <Dropdown.Item eventKey="Capacidad 3">
                                                  Capacidad 3
                                             </Dropdown.Item>
                                        </DropdownButton>
                                   </div>
                              </div>
                         </div>

                         <div className="my-3">
                              <h6 className="card-subtitle mt-3">2- Componentes</h6>
                              <label htmlFor="exampleInputEmail1" className="form-label mt-3">Condensador</label>

                              <div className="row">
                                   <div className="col-4"> 
                                        <input type="text" className="form-control" placeholder="Modelo EC" />
                                   </div>
                                   <div className="col-4">
                                        <input type="text" className="form-control" placeholder="Modelo EC" />
                                   </div>
                              </div>

                              <label htmlFor="exampleInputEmail1" className="form-label mt-3">Evaporador</label>
                              
                              <div className="row">
                                   <div className="col-4">
                                        <input type="text" className="form-control" placeholder="Modelo UE" />
                                   </div>
                                   <div className="col-4">
                                        <input type="text" className="form-control" placeholder="Modelo UE" />
                                   </div>
                              </div>
                         </div>

                         <div className="my-3">
                              <h6 className="card-subtitle mt-3">3- Reporte técnico</h6>
                              <div className="row my-3">
                                   <div className="col-4">
                                        <DropdownButton id="drop-estado" variant="light" title={dropdownTitles.estado} onSelect={(e) => handleSelect('estado', e)} style={{border: "1px solid black", borderRadius:"15px"}}>
                                             <Dropdown.Item eventKey="Estado 1">
                                                  Estado 1
                                             </Dropdown.Item>
                                             <Dropdown.Item eventKey="Estado 2">
                                                  Estado 2
                                             </Dropdown.Item>
                                             <Dropdown.Item eventKey="Estado 3">
                                                  Estado 3
                                             </Dropdown.Item>
                                        </DropdownButton>
                                   </div>
                                   <div className="col-4">
                                        <DropdownButton id="drop-refrigeracion" variant="light" title={dropdownTitles.refrigeracion} onSelect={(e) => handleSelect('refrigeracion', e)} style={{border: "1px solid black", borderRadius:"15px"}}>
                                             <Dropdown.Item eventKey="Refrigeración 1">
                                                  Refrigeración 1
                                             </Dropdown.Item>
                                             <Dropdown.Item eventKey="Refrigeración 2">
                                                  Refrigeración 2
                                             </Dropdown.Item>
                                             <Dropdown.Item eventKey="Refrigeración 3">
                                                  Refrigeración 3
                                             </Dropdown.Item>
                                        </DropdownButton>
                                   </div>

                                   <div className="col-4">
                                        <DropdownButton id="drop-voltaje" variant="light" title={dropdownTitles.voltaje_compresor} onSelect={(e) => handleSelect('voltaje_compresor', e)} style={{border: "1px solid black", borderRadius:"15px"}}>
                                             <Dropdown.Item eventKey="Voltaje de compresor 1">
                                                  Voltaje de compresor 1
                                             </Dropdown.Item>
                                             <Dropdown.Item eventKey="Voltaje de compresor 2">
                                                  Voltaje de compresor 2
                                             </Dropdown.Item>
                                             <Dropdown.Item eventKey="Voltaje de compresor 3">
                                                  Voltaje de compresor 3
                                             </Dropdown.Item>
                                        </DropdownButton>
                                   </div>
                              </div>
                              
                              <div className="row">
                                   <label htmlFor="exampleInputEmail1" className="form-label">Amperaje del equipo</label>
                                   
                                   <div className="col-2">
                                        <input type="text" className="form-control" placeholder="L1"/> 
                                   </div>
                                   <div className="col-2">
                                        <input type="text" className="form-control" placeholder="L2"/>
                                   </div>

                                   <div className="col-2">
                                        <input type="text" className="form-control" placeholder="L3"/>
                                   </div>

                                   <div className="col-2">
                                        <DropdownButton id="drop-presion" variant="light" title={dropdownTitles.presion} onSelect={(e) => handleSelect('presion', e)} style={{border: "1px solid black", borderRadius:"15px"}}>
                                             <Dropdown.Item eventKey="Presión 1">
                                                  Presión 1
                                             </Dropdown.Item>
                                             <Dropdown.Item eventKey="Presión 2">
                                                  Presión 2
                                             </Dropdown.Item>
                                             <Dropdown.Item eventKey="Presión 3">
                                                  Presión 3
                                             </Dropdown.Item>
                                        </DropdownButton>     
                                   </div>

                                   <div className="col-4">
                                        <input type="text" className="form-control" placeholder="Distancia evaporador - compresor" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                   </div> 
                              </div>
                         </div>

                         <div className="my-3">
                              <h6 className="card-subtitle">4- Observaciones</h6>

                              <div className="row my-3">
                                   <div className="col-12">
                                        <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                        <label htmlFor="floatingTextarea">Escriba aquí</label>
                                   </div>
                                   </div>
                              </div>
                         </div>

                         <div className="col-12 d-flex justify-content-center">
                              <button type="submit" className="btn btn-light" onClick={submitAgregarAireAcondicionado}>Agregar</button>
                         </div>
                    </form>
               </div>
          </div>
          </>
     )
}

export default FormAgregarAireAcondicionado;