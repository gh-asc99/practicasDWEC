import "./CrearProducto.css";

const CrearProducto = () => {
    return(
        <>
            <div id="cuerpoCrearProducto">
                <h3>Registro de nuevo producto</h3>
                <div>
                    <form action="POST">
                        <div className="campoFormulario">
                            <label htmlFor="inputNombre">Nombre: </label>
                            <input type="text" name="inputNombre" id="inputNombre" />
                        </div>
                            <div className="campoFormulario">
                            <label htmlFor="inputDescripcion">Descripción: </label>
                            <input type="text" name="inputDescripcion" id="inputDescripcion" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CrearProducto;