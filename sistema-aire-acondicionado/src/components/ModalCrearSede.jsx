function ModalCrearSede(){
     return (
          <>
               <div className="card" style={{width: "27rem"}}>
                    <div className="card-body">
                         <h5 className="card-title">Nueva sede</h5>
                         <form action="">
                              <div className="my-3">
                                   <input type="text" className="form-control" placeholder="Nombre" />
                              </div>

                              <div className="my-3">
                                   <input type="text" className="form-control" placeholder="Dirección" />
                              </div>
                              
                              <div className="my-3">
                                   <input type="text" className="form-control" placeholder="Distrito" />
                              </div>
                              
                              <div className="my-3">
                                   <input type="text" className="form-control" placeholder="Oficina/Piso" />
                              </div>
                              
                              <div className="d-flex justify-content-center">
                                   <button className="btn btn-light card-link" style={{width: "50%"}}>
                                        Crear
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          </>
     )
}

export default ModalCrearSede;