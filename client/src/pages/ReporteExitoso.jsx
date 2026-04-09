function ReporteExitoso() {
     return (
          <>
               <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                         <h1>Reporte creado exitosamente</h1>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                         <img src=".\src\assets\check.svg" className="my-3" style={{ width: "7%" }} />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                         <button className="btn btn-success m-3" style={{ width: "15%" }}>Exportar a Excel</ button>
                         <button className="btn btn-danger m-3" style={{ width: "15%" }}>Exportar a PDF</button>
                    </div>
               </div>
          </>
     )
}

export default ReporteExitoso;