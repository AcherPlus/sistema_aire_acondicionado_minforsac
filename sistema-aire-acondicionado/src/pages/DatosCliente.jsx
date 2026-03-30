import CardCentroCosto from "../components/CardCentrosCosto";
import CardSede from "../components/CardSedes";
import ModalCrearCentroCosto from "../components/ModalCrearCentroCosto";
import ModalCrearSede from "../components/ModalCrearSede";

function DatosCliente() {
     return (
     <>
          <h1>GRUPO EFE</h1>
          
          <ul class="nav nav-tabs" id="myTab" role="tablist">
               <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Sedes</button>
               </li>
               <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Centros de costo</button>
               </li>
          </ul>
          <div class="tab-content" id="myTabContent">
               <div class="tab-pane fade show active mt-3" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row mb-3">
                         <div className="col-2">
                              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#sedeModal">
                                   Agregar sede
                              </button>
                         </div>
                    </div>

                    <div class="modal fade" id="sedeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                         <div class="modal-dialog">
                              <div class="modal-content" style={{backgroundColor: "transparent", border:"0px transparent"}}>
                                   <div class="modal-body d-flex justify-content-center align-items-center">
                                        <ModalCrearSede />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="row mb-3">
                         <div className="col-3">
                              <CardSede />
                         </div>
                         <div className="col-3">
                              <CardSede />
                         </div>
                         <div className="col-3">
                              <CardSede />
                         </div>
                         <div className="col-3">
                              <CardSede />
                         </div>
                    </div>
               </div>
               <div class="tab-pane fade mt-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row mb-3">
                         <div className="col-3">
                              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#centroCostoModal">
                                   Agregar centro de costo
                              </button>
                         </div>
                    </div>

                    <div class="modal fade" id="centroCostoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                         <div class="modal-dialog">
                              <div class="modal-content" style={{backgroundColor: "transparent", border:"0px transparent"}}>
                                   <div class="modal-body d-flex justify-content-center align-items-center">
                                        <ModalCrearCentroCosto />
                                   </div>
                              </div>
                         </div>
                    </div>
                    
                    <div className="row mb-3">
                         <div className="col-3">
                              <CardCentroCosto/>
                         </div>
                         <div className="col-3">
                              <CardCentroCosto/>
                         </div>
                         <div className="col-3">
                              <CardCentroCosto/>
                         </div>
                         <div className="col-3">
                              <CardCentroCosto/>
                         </div>
                    </div>
               </div>
          </div>

          
          
     </>
     )
}
     
export default DatosCliente;