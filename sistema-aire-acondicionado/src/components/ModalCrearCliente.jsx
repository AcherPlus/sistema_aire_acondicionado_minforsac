function ModalCrearCliente(){
     return (
          <>
               <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                         <h5 className="card-title">Nueva empresa</h5>
                         
                         <form action="">
                              <input type="text" className="form-control" placeholder="Nombre/Razón Social" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                         </form>

                         <button className="btn btn-light card-link">
                              Crear
                         </button>
                    </div>
               </div>
          </>
     )
}

export default ModalCrearCliente;