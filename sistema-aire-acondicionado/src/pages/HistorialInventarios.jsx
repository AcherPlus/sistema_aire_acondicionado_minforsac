function HistorialInventarios() {
     return(
          <>
               <h1>Historial de inventarios</h1>

               <table class="table">
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
                              <th scope="row">24/03/26 14:27:15</th>
                              <td>Grupo Efe</td>
                              <td>Sede San Isidro</td>
                              <td>Financiera Efectiva, Juntoz</td>
                              <td>
                                   <button className="btn btn-light">Ver inventario</button>
                              </td>
                         </tr>
                    </tbody>
                    </table>
          </>
     )
}

export default HistorialInventarios;