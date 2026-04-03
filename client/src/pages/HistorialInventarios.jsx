function HistorialInventarios() {
     
     const submitVerInventario = (e) => {
        e.preventDefault();
        console.log("Botón funcionando");
    }
     
     return(
          <>
               <h1>Historial de inventarios</h1>

               

               <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                         <table className="table table-primary my-3" style={{width:"80%"}}>
                              <thead>
                                   <tr>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Cliente</th>
                                        <th scope="col">Sede</th>
                                        <th scope="col">Centro de costos</th>
                                        <th scope="col"> Archivo </th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr>
                                        <td scope="row">24/03/26 14:27:15</td>
                                        <td>Grupo Efe</td>
                                        <td>Sede San Isidro</td>
                                        <td>Financiera Efectiva, Juntoz</td>
                                        <td>
                                             <button className="btn btn-light" onClick={submitVerInventario}>Ver inventario</button>
                                        </td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
          </>
     )
}

export default HistorialInventarios;