import useProducto from "../hooks/useProducto.js";
import "./CrearProducto.css";
import { ContextoAviso } from "../context/ProveedorAviso.jsx";
import { useContext } from "react";

const CrearProducto = () => {

    const { productoCreado, actualizarDatoProducto } = useProducto();

    const { mostrarAviso } = useContext(ContextoAviso);

        const erroresFormularioProducto = {
        nombre: "El nombre del producto debe contener 5 carácteres como mínimo.",
        descripcion: "La descripción del producto debe contener 25 carácteres como mínimo.",
        peso: "El peso del producto debe ser mayor que 0.",
        precio: "El precio del producto debe ser mayor que 0.",
        categoria: "Debes seleccionar alguna categoría para el producto.",
        imagen: "La descripción del producto"
    }

    const comprobarProductoFormulario = () => {
        let erroresFormulario = [];
        const producto = productoCreado;

        if (producto['nombre'].length < 5) {
            erroresFormulario = [...erroresFormulario, erroresFormularioProducto['nombre']]
            mostrarAviso({
                tipo: "error",
                titulo: "Campo no válido",
                mensaje: erroresFormularioProducto['nombre']
            });
        } else if (producto['descripcion'].length < 25) {
            formularioValido = false;
            mostrarAviso({
                tipo: "error",
                titulo: "Campo no válido",
                mensaje: erroresFormularioProducto['descripcion']
            });
        } else if (producto['peso'].length <= 0) {
            formularioValido = false;
            mostrarAviso({
                tipo: "error",
                titulo: "Campo no válido",
                mensaje: erroresFormularioProducto['peso']
            });
        } else if (producto['precio'].length <= 0) {
            formularioValido = false;
            mostrarAviso({
                tipo: "error",
                titulo: "Campo no válido",
                mensaje: erroresFormularioProducto['precio']
            });
        } else if (producto['categoria'] == null) {
            formularioValido = false;
            mostrarAviso({
                tipo: "error",
                titulo: "Campo no válido",
                mensaje: erroresFormularioProducto['categoria']
            });
        } else if (URL.canParse(producto['imagen'])) {
            formularioValido = false;
            mostrarAviso({
                tipo: "error",
                titulo: "Campo no válido",
                mensaje: erroresFormularioProducto['imagen']
            });
        }

        return formularioValido;
    }

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
                                if (comprobarProductoFormulario()){
                                    agregarProductoSupabase();
                                    mostrarAviso({
                                            tipo: "exito",
                                            titulo: "Producto registrado correctamente",
                                            mensaje: "La lista de productos almacenados ha sido actualizada."
                                        });
                                } else{
                                    mostrarAviso({
                                            tipo: "error",
                                            titulo: "Fallo al registrar un nuevo producto",
                                            mensaje: "Comprueba que has rellenado el formulario de creación del producto correctamente."
                                        });
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