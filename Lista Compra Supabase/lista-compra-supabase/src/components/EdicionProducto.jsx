import { useEffect } from "react";
import "./EdicionProducto.css";
import useProducto from "../hooks/useProducto.js";
import useAviso from "../hooks/useAviso.js";

const EdicionProducto = ({ producto }) => {

    const { productoCreado,
        actualizarProductoSupabase, 
        actualizarDatoProducto, 
        erroresFormularioProducto,
        traerProductosSupabase,
        cambiarModoEdicion} = useProducto();

    const { mostrarAviso } = useAviso();

    const comprobarProductoFormularioEdicion = () => {
        let formularioValido = true;
        let erroresFormulario = [];
        const productoEnEdicion = productoCreado;

        if (productoEnEdicion['nombre'].length < 5) {
            erroresFormulario = [...erroresFormulario, erroresFormularioProducto['nombre']]
        }
        if (productoEnEdicion['descripcion'].length < 25) {
            erroresFormulario = [...erroresFormulario, erroresFormularioProducto['descripcion']]
        }
        if (productoEnEdicion['peso'] <= 0) {
            erroresFormulario = [...erroresFormulario, erroresFormularioProducto['peso']]
        }
        if (productoEnEdicion['precio'] <= 0) {
            erroresFormulario = [...erroresFormulario, erroresFormularioProducto['precio']]
        }
        if (!productoEnEdicion['categoria']) {
            erroresFormulario = [...erroresFormulario, erroresFormularioProducto['categoria']]
        }
        if (!URL.canParse(productoEnEdicion['imagen'])) {
            erroresFormulario = [...erroresFormulario, erroresFormularioProducto['imagen']]
        }

        if (erroresFormulario.length) {
            formularioValido = false;
            mostrarAviso({
                tipo: "error",
                titulo: "Fallo al editar un producto",
                mensaje: `Comprueba que has rellenado el formulario de edición del producto correctamente:\n
                ${erroresFormulario.join('\n')}`
            });
        }

        return formularioValido;
    }

    useEffect(() => {
        if (producto) {
            Object.keys(producto).forEach(campo => {
                actualizarDatoProducto(campo, producto[campo]);
            });
        }
    }, [producto]);


    return (
        <>
            <div id="cuerpoEditarProducto">
                <h3>Edición de producto</h3>
                <div id="contFormEditarProducto">
                    <form>
                        <div className="campoFormulario">
                            <label htmlFor="nombre">Nombre: </label>
                            <input type="text" name="nombre" id="inputNombre" defaultValue={productoCreado.nombre} onInput={(evento) => { actualizarDatoProducto(evento.target.name, evento.target.value) }} />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="descripcion">Descripción: </label>
                            <input type="text" name="descripcion" id="inputDescripcion" defaultValue={productoCreado.descripcion} onInput={(evento) => { actualizarDatoProducto(evento.target.name, evento.target.value) }} />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="precio">Precio: </label>
                            <input type="number" step="0.01" name="precio" id="inputPrecio" defaultValue={productoCreado.precio} onInput={(evento) => { actualizarDatoProducto(evento.target.name, evento.target.value) }} />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="peso">Peso: </label>
                            <input type="number" step="0.01" name="peso" id="inputPeso" defaultValue={productoCreado.peso} onInput={(evento) => { actualizarDatoProducto(evento.target.name, evento.target.value) }} />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="categoria">Categoria: </label>
                            <select id="categorias" name="categoria" defaultValue={productoCreado.categoria} onChange={(evento) => actualizarDatoProducto(evento.target.name, evento.target.value)}>
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
                            <input type="url" name="imagen" id="inputImagen" defaultValue={productoCreado.imagen} onInput={(evento) => { actualizarDatoProducto(evento.target.name, evento.target.value) }} />
                        </div>
                        <div id="botones">
                            <input type="button" value="Editar producto" onClick={async () => {
                                if (comprobarProductoFormularioEdicion()) {
                                    try {
                                        await actualizarProductoSupabase(productoCreado);
                                        await traerProductosSupabase();
                                        mostrarAviso({
                                            tipo: "exito",
                                            titulo: "Producto actualizado correctamente",
                                            mensaje: "La lista de productos almacenados ha sido actualizada."
                                        });
                                    } catch (error) {
                                        mostrarAviso({
                                            tipo: "error",
                                            titulo: "Error al actualizar el producto",
                                            mensaje: error.message
                                        });
                                    }

                                }
                            }} />
                            <input
                                type="button"
                                value="Cerrar"
                                onClick={() => {cambiarModoEdicion(false);
                                }
                                }
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EdicionProducto
