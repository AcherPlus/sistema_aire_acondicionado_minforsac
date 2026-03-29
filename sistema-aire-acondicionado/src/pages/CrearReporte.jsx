import CardAireAconcionado from "../components/CardAiresAcondicionados"
import FormAgregarAireAcondicionado from "../components/FormAgregarAireAcondicionado"

function CrearReporte() {
     return(
          <>
               <h1>Crear reporte</h1>

               <h4>Aires acondicionados</h4>
               <button className="btn btn-ligth">
                    +
               </button>

               <CardAireAconcionado />

               <FormAgregarAireAcondicionado />

               <button className="btn btn-light">Crear reporte</button>
          </>
     )
}

export default CrearReporte