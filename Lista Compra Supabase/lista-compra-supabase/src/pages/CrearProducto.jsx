import "./CrearProducto.css";

const CrearProducto = () => {
    return (
        <>
            <div id="cuerpoCrearProducto">
                <h3>Registro de nuevo producto</h3>
                <div id="contFormRegistrarProducto">
                    <form>
                        <div className="campoFormulario">
                            <label htmlFor="inputNombre">Nombre: </label>
                            <input type="text" name="inputNombre" id="inputNombre" />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="inputDescripcion">Descripción: </label>
                            <input type="text" name="inputDescripcion" id="inputDescripcion" />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="inputPrecio">Precio: </label>
                            <input type="number" step="0.01" name="inputPrecio" id="inputPrecio" />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="inputPeso">Peso: </label>
                            <input type="number" step="0.01" name="inputPeso" id="inputPeso" />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="inputCategoria">Categoria: </label>
                            <input type="text" name="inputCategoria" id="inputCategoria" />
                        </div>

                        <div className="campoFormulario">
                            <label htmlFor="inputImagen">Imagen: </label>
                            <input type="url" name="inputImagen" id="inputImagen" />
                        </div>
                        <div id="botonGuardar">
                            <input type="button" value="Guardar producto" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CrearProducto;