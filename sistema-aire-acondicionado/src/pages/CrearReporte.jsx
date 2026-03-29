import CardAireAconcionado from "../components/CardAiresAcondicionados"
import FormAgregarAireAcondicionado from "../components/FormAgregarAireAcondicionado"

function CrearReporte() {
     return(
          <>
               <h1>Crear reporte</h1>

               <div className="row">
                    <div className="col-2">
                         <h4>Aires acondicionados</h4>
                    </div>
                    <div className="col-2">
                         <button className="btn btn-primary">
                              +
                         </button>
                    </div>
               </div>

               <CardAireAconcionado />

               <button className="btn btn-light">Crear reporte</button>

               <FormAgregarAireAcondicionado />

               
          </>
     )
}

export default CrearReporte