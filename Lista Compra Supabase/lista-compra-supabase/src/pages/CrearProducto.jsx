import useProducto from "../hooks/useProducto.js";
import "./CrearProducto.css";

const CrearProducto = () => {

    const { actualizarDatoProducto } = useProducto();



    return (
        <>
            <div id="cuerpoCrearProducto">
                <h3>Registro de nuevo producto</h3>
                <div id="contFormRegistrarProducto">
                    <form>
                        <div className="campoFormulario">
                            <label htmlFor="nombre">Nombre: </label>
                            <input type="text" name="nombre" id="inputNombre" onInput={(evento) => { actualizarDatoProducto(evento.target.name, evento.target.value) }} />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="descripcion">Descripción: </label>
                            <input type="text" name="descripcion" id="inputDescripcion" onInput={(evento) => { actualizarDatoProducto(evento.target.name, evento.target.value) }} />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="precio">Precio: </label>
                            <input type="number" step="0.01" name="precio" id="inputPrecio" onInput={(evento) => { actualizarDatoProducto(evento.target.name, evento.target.value) }} />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="peso">Peso: </label>
                            <input type="number" step="0.01" name="peso" id="inputPeso" onInput={(evento) => { actualizarDatoProducto(evento.target.name, evento.target.value) }} />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="categoria">Categoria: </label>
                            <select id="categorias" name="categoria" onChange={(evento) => actualizarDatoProducto(evento.target.name, evento.target.value)}>
                                <option name="categoria" value="Cereal" defaultChecked>Cereales</option>
                                <option name="categoria" value="Salsa">Salsas</option>
                                <option name="categoria" value="Carne">Carnes</option>
                                <option name="categoria" value="Cacao">Cacaos</option>
                                <option name="categoria" value="Verduras">Verduras</option>
                            </select>
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="imagen">Imagen: </label>
                            <input type="url" name="imagen" id="inputImagen" onInput={(evento) => { actualizarDatoProducto(evento.target.name, evento.target.value) }} />
                        </div>
                        <div id="botonGuardar">
                            <input type="button" value="Guardar producto" onClick={() => {
                                if (comprobarFormulario()){
                                    agregarProductoSupabase();
                                    //lanzar aviso de exito
                                } else{
                                    //lanzar error
                                    //lanzar aviso de error
                                }
                            }}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CrearProducto;