function ModalCrearSede(){
     return (
          <>
               <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                         <h5 className="card-title">Nueva sede</h5>
                         
                         <form action="">
                              <input type="text" className="form-control" placeholder="Nombre" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                              <input type="text" className="form-control" placeholder="Dirección" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                              <input type="text" className="form-control" placeholder="Distrito" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                              <input type="text" className="form-control" placeholder="Oficina/Piso" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                              <button className="btn btn-light card-link">
                                   Crear
                              </button>
                         </form>
                    </div>
               </div>
          </>
     )
}

export default ModalCrearSede;