function FormAgregarAireAcondicionado(){
     return (
          <>
               <div className="card">
                    <div className="card-body">
                         <h5 className="card-title">Agregar aire acondicionado</h5>

                         <form>
                              <div className="mb-3">
                                   <h6>1- Identificación</h6>
                                   
                                   <input type="text" className="form-control" placeholder="Marca" id="exampleInputText1" aria-describedby="TextHelp"/>

                                   <input type="text" className="form-control" placeholder="Inventario" id="exampleInputText1" aria-describedby="TextHelp"/>

                                   <div class="dropdown">
                                        <a class="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Centro de costo
                                        </a>

                                        <ul class="dropdown-menu">
                                             <li>
                                                  <a class="dropdown-item" href="#">Financiera Efectiva</a>
                                             </li>
                                             <li>
                                                  <a class="dropdown-item" href="#">Juntoz</a>
                                             </li>
                                        </ul>
                                   </div>

                                   <input type="text" className="form-control" placeholder="Ubicación" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                                   <div class="dropdown">
                                        <a class="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Tipo
                                        </a>

                                        <ul class="dropdown-menu">
                                             <li>
                                                  <a class="dropdown-item" href="#">Mini Split</a>
                                             </li>
                                             <li>
                                                  <a class="dropdown-item" href="#">Techo Pared</a>
                                             </li>
                                        </ul>
                                   </div>

                                   <div class="dropdown">
                                        <a class="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Capacidad
                                        </a>

                                        <ul class="dropdown-menu">
                                             <li>
                                                  <a class="dropdown-item" href="#">12K</a>
                                             </li>
                                             <li>
                                                  <a class="dropdown-item" href="#">18K</a>
                                             </li>
                                        </ul>
                                   </div>
                              </div>

                              <div className="mb-3">
                                   <h6>2- Componentes</h6>
                                   
                                   <label for="exampleInputEmail1" className="form-label">Condensador</label>
                                   <input type="text" className="form-control" placeholder="Modelo EC" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                   <input type="text" className="form-control" placeholder="Modelo EC" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                                   <label for="exampleInputEmail1" className="form-label">Evaporador</label>
                                   <input type="text" className="form-control" placeholder="Modelo UE" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                   <input type="text" className="form-control" placeholder="Modelo UE" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                              </div>

                              <div className="mb-3">
                                   <h6>3- Reporte técnico</h6>
                                   
                                   <div class="dropdown">
                                        <a class="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Estado
                                        </a>

                                        <ul class="dropdown-menu">
                                             <li>
                                                  <a class="dropdown-item" href="#">Operativo</a>
                                             </li>
                                             <li>
                                                  <a class="dropdown-item" href="#">Inoperativo</a>
                                             </li>
                                             <li>
                                                  <a class="dropdown-item" href="#">Operativo con Observación</a>
                                             </li>
                                        </ul>
                                   </div>

                                   <div class="dropdown">
                                        <a class="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Refrigeración
                                        </a>

                                        <ul class="dropdown-menu">
                                             <li>
                                                  <a class="dropdown-item" href="#">R-22</a>
                                             </li>
                                             <li>
                                                  <a class="dropdown-item" href="#">R40A</a>
                                             </li>
                                        </ul>
                                   </div>

                                   <div class="dropdown">
                                        <a class="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Voltaje del compresor
                                        </a>

                                        <ul class="dropdown-menu">
                                             <li>
                                                  <a class="dropdown-item" href="#">1</a>
                                             </li>
                                             <li>
                                                  <a class="dropdown-item" href="#">1</a>
                                             </li>
                                             <li>
                                                  <a class="dropdown-item" href="#">3</a>
                                             </li>
                                        </ul>
                                   </div>

                                   <label for="exampleInputEmail1" className="form-label">Amperaje del equipo</label>
                                   <input type="text" className="form-control" placeholder="L1" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                   <input type="text" className="form-control" placeholder="L2" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                   <input type="text" className="form-control" placeholder="L3" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                                   <div class="dropdown">
                                        <a class="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Presión
                                        </a>

                                        <ul class="dropdown-menu">
                                             <li>
                                                  <a class="dropdown-item" href="#">LP</a>
                                             </li>
                                             <li>
                                                  <a class="dropdown-item" href="#">HP</a>
                                             </li>
                                        </ul>
                                   </div>

                                   <input type="text" className="form-control" placeholder="Distancia de evaporador y compresor" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                              </div>

                              <div className="mb-3">
                                   <h6>4- Observaciones</h6>

                                   <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                        <label for="floatingTextarea">Escriba aquí</label>
                                   </div>
                              </div>

                              <button type="submit" className="btn btn-primary">Agregar</button>
                         </form>
                    </div>
               </div>
          </>
     )
}

export default FormAgregarAireAcondicionado;