import CardAireAconcionado from "../components/CardAiresAcondicionados"
import FormAgregarAireAcondicionado from "../components/FormAgregarAireAcondicionado"

function CrearReporte() {
     return(
          <>
               <h1>Crear reporte</h1>

               <div className="row">
                    <div className="col-3 d-flex justify-content-between">
                         <h4>Aires acondicionados</h4>
                    </div>
                    <div className="row my-3">
                         <div className="col-3">
                              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#sedeModal">
                                   Agregar aire acondicionado
                              </button>
                         </div>
                    </div>
               </div>

               <div className="row my-3">
                    <div className="col-3">
                         <CardAireAconcionado />
                    </div>
                    <div className="col-3">
                         <CardAireAconcionado />
                    </div>
                    <div className="col-3">
                         <CardAireAconcionado />
                    </div>
                    <div className="col-3">
                         <CardAireAconcionado />
                    </div>
               </div>

               <div className="d-flex justify-content-center">
                    <button className="btn btn-light my-3" style={{border: "1px solid black"}}>
                         Crear reporte
                    </button>
               </div>

               <div class="modal fade modal-lg" id="sedeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                         <div class="modal-content" style={{backgroundColor: "transparent", border:"0px transparent", width:"50rem"}}>
                              <div class="modal-body d-flex justify-content-center align-items-center" style={{width:"50rem"}}>
                                   <FormAgregarAireAcondicionado />
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default CrearReporte