import useProducto from "../hooks/useProducto.js";
import "./CrearProducto.css";
import { ContextoAviso } from "../context/ProveedorAviso.jsx";
import { useContext } from "react";

const CrearProducto = () => {

    const { productoCreado, 
        actualizarDatoProducto, 
        agregarProductoSupabase, 
        erroresFormularioProducto } = useProducto();

    const { mostrarAviso } = useContext(ContextoAviso);


    const comprobarProductoFormulario = () => {
        let formularioValido = true;
        let erroresFormulario = [];
        const producto = productoCreado;

        if (producto['nombre'].length < 5) {
            erroresFormulario = [...erroresFormulario, erroresFormularioProducto['nombre']]
        }
        if (producto['descripcion'].length < 25) {
            erroresFormulario = [...erroresFormulario, erroresFormularioProducto['descripcion']]
        }
        if (producto['peso'] <= 0) {
            erroresFormulario = [...erroresFormulario, erroresFormularioProducto['peso']]
        }
        if (producto['precio'] <= 0) {
            erroresFormulario = [...erroresFormulario, erroresFormularioProducto['precio']]
        }
        if (!producto['categoria']) {
            erroresFormulario = [...erroresFormulario, erroresFormularioProducto['categoria']]
        }
        if (!URL.canParse(producto['imagen'])) {
            erroresFormulario = [...erroresFormulario, erroresFormularioProducto['imagen']]
        }

        if (erroresFormulario.length) {
            formularioValido = false;
            mostrarAviso({
                tipo: "error",
                titulo: "Fallo al registrar un nuevo producto",
                mensaje: `Comprueba que has rellenado el formulario de creación del producto correctamente:\n
                ${erroresFormulario.join('\n')}`
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
                                <option value="">Selecciona una categoría</option>
                                <option name="categoria" value="Cereal">Cereales</option>
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
                            <input type="button" value="Guardar producto" onClick={async () => {
                                if (comprobarProductoFormulario()) {
                                    try {
                                        await agregarProductoSupabase(productoCreado);
                                        mostrarAviso({
                                            tipo: "exito",
                                            titulo: "Producto registrado correctamente",
                                            mensaje: "La lista de productos almacenados ha sido actualizada."
                                        });
                                    } catch (error) {
                                        mostrarAviso({
                                            tipo: "error",
                                            titulo: "Error al guardar el producto",
                                            mensaje: error.message
                                        });
                                    }

                                }
                            }} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CrearProducto;