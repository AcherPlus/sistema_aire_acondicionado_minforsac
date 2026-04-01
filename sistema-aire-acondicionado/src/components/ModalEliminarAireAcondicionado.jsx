function ModalEliminarAire() {
    return (
        <>
            <div className="card" style={{width: "27rem", height: "13rem"}}>
                <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title">¿Desea eliminar el aire acondicionado?</h5>
                        <form action="">
                            <div className="my-3">
                                <input type="text" className="form-control" placeholder="Nombre/Razón Social" />
                            </div>
                            <div className="my-3 d-flex justify-content-center">
                                <button className="btn btn-light card-link" style={{width: "50%"}}>
                                    Aceptar
                                </button>
                                <button className="btn btn-light card-link" style={{width: "50%"}}>
                                    Cancelar
                                </button>
                            </div>
                        </form>                         
                </div>
            </div>
        </>
    )
}

export default ModalEliminarAire;