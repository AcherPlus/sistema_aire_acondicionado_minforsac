function ModalCrearCliente(){
     
     const submitAgregarCliente = (e) => {
          e.preventDefault();
          console.log("Botón funcionando");
     }
     
     return (
          <>
               <div className="card" style={{width: "27rem", height: "13rem"}}>
                    <div className="card-body d-flex flex-column justify-content-center">
                         <h5 className="card-title">Nueva empresa</h5>
                         <form action="">
                              <div className="my-3">
                                   <input type="text" className="form-control" placeholder="Nombre/Razón Social" />
                              </div>
                              <div className="my-3 d-flex justify-content-center" >
                                   <button className="btn btn-light card-link" style={{width: "50%"}} onClick={submitAgregarCliente}>
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