import CardCliente from "../components/CardClientes";

function MisClientes() {
     return (
     <>
          <h1>Mis clientes</h1>
          
          <div className="row">
               <div className="col-3">
                    <CardCliente />
               </div>
               <div className="col-3">
                    <CardCliente />
               </div>
               <div className="col-3">
                    <CardCliente />
               </div>
               <div className="col-3">
                    <CardCliente />
               </div>
          </div>

     </>
     )
}
     
export default MisClientes;