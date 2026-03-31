function ModalCrearCentroCosto(){
     return (
          <>
               <div className="card" style={{width: "27rem"}}>
                    <div className="card-body">
                         <h5 className="card-title">Nuevo centro de costo</h5>
                         <form action="">
                              <div className="my-3">
                                   <input type="text" className="form-control" placeholder="Nombre/Razón Social"/>
                              </div>
                              <div className="my-3 d-flex justify-content-center" >
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

export default ModalCrearCentroCosto;