function FormAgregarAireAcondicionado(){
     return (
          <>
          <div className="card">
               <div className="card-body">
                    <h5 className="card-title">Agregar aire acondicionado</h5>

                    <form>
                         <div className="mb-3">
                              <h6 className="card-subtitle">1- Identificación</h6>
                              
                              <div className="row">
                                   <div className="col-4 ">
                                        
                                        <input type="text" className="form-control" placeholder="Marca" id="exampleInputText1" aria-describedby="TextHelp"/>
                                   </div>
                                   <div className="col-4">
                                        <input type="text" className="form-control" placeholder="Inventario" id="exampleInputText1" aria-describedby="TextHelp"/>
                                   </div>
                                   <div className="col-4">
                                        <div className="dropdown">
                                             <a className="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Centro de costo
                                             </a>

                                             <ul className="dropdown-menu">
                                                  <li>
                                                       <a className="dropdown-item" href="#">Financiera Efectiva</a>
                                                  </li>
                                                  <li>
                                                       <a className="dropdown-item" href="#">Juntoz</a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>

                              <div className="row">
                                   <div className="col-4">
                                        <input type="text" className="form-control" placeholder="Ubicación" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                                   </div>

                                   <div className="col-4">
                                        <div className="dropdown">
                                             <a className="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Tipo
                                             </a>

                                             <ul className="dropdown-menu">
                                                  <li>
                                                       <a className="dropdown-item" href="#">Mini Split</a>
                                                  </li>
                                                  <li>
                                                       <a className="dropdown-item" href="#">Techo Pared</a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="col-4">
                                        <div className="dropdown">
                                             <a className="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Capacidad
                                             </a>

                                             <ul className="dropdown-menu">
                                                  <li>
                                                       <a className="dropdown-item" href="#">12K</a>
                                                  </li>
                                                  <li>
                                                       <a className="dropdown-item" href="#">18K</a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="mb-3">
                              <h6 className="card-subtitle">2- Componentes</h6>
                              
                              <label htmlFor="exampleInputEmail1" className="form-label ">Condensador</label>

                              <div className="row">
                                   <div className="col-4"> 
                                        <input type="text" className="form-control" placeholder="Modelo EC" />
                                   </div>

                                   <div className="col-4">
                                        <input type="text" className="form-control" placeholder="Modelo EC" />
                                   </div>
                              </div>

                              <label htmlFor="exampleInputEmail1" className="form-label">Evaporador</label>
                              
                              <div className="row">
                                   <div className="col-4">
                                        <input type="text" className="form-control" placeholder="Modelo UE" />
                              
                                   </div>

                                   <div className="col-4">
                                        <input type="text" className="form-control" placeholder="Modelo UE" />
                                   </div>
                              </div>
                         </div>

                         <div className="mb-3">
                              <h6 className="card-subtitle">3- Reporte técnico</h6>
                              
                              <div className="row">
                                   <div className="col-4">
                                        <div className="dropdown">
                                             <a className="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Estado
                                             </a>

                                             <ul className="dropdown-menu">
                                                  <li>
                                                       <a className="dropdown-item" href="#">Operativo</a>
                                                  </li>
                                                  <li>
                                                       <a className="dropdown-item" href="#">Inoperativo</a>
                                                  </li>
                                                  <li>
                                                       <a className="dropdown-item" href="#">Operativo con Observación</a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="col-4">
                                        <div className="dropdown">
                                             <a className="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Refrigeración
                                             </a>

                                             <ul className="dropdown-menu">
                                                  <li>
                                                       <a className="dropdown-item" href="#">R-22</a>
                                                  </li>
                                                  <li>
                                                       <a className="dropdown-item" href="#">R40A</a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="col-4">
                                        <div className="dropdown">
                                             <a className="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Voltaje del compresor
                                             </a>

                                             <ul className="dropdown-menu">
                                                  <li>
                                                       <a className="dropdown-item" href="#">1</a>
                                                  </li>
                                                  <li>
                                                       <a className="dropdown-item" href="#">1</a>
                                                  </li>
                                                  <li>
                                                       <a className="dropdown-item" href="#">3</a>
                                                  </li>
                                             </ul>
                                        </div>
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
                                        <div className="dropdown">
                                             <a className="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Presión
                                             </a>

                                             <ul className="dropdown-menu">
                                                  <li>
                                                       <a className="dropdown-item" href="#">LP</a>
                                                  </li>
                                                  <li>
                                                       <a className="dropdown-item" href="#">HP</a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="col-4">
                                        <input type="text" className="form-control" placeholder="Distancia de evaporador y compresor" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                   </div> 
                              </div>
                         </div>

                         <div className="mb-3">
                              <h6 className="card-subtitle">4- Observaciones</h6>

                              <div className="form-floating">
                                   <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                   <label htmlFor="floatingTextarea">Escriba aquí</label>
                              </div>
                         </div>

                         <div className="col-12 d-flex justify-content-center">
                              <button type="submit" className="btn btn-light">Agregar</button>
                         </div>
                    </form>
               </div>
          </div>
          </>
     )
}

export default FormAgregarAireAcondicionado;