import "./CrearListado.css";
import { useContext } from "react";
import { ContextoAviso } from "../context/ProveedorAviso.jsx";
import { ContextoListado } from "../context/ProveedorListado.jsx";

const CrearListado = () => {

    const { mostrarAviso } = useContext(ContextoAviso);

    const { actualizarDatoListado,
        listadoCreado,
        erroresFormularioListado,
        agregarListadoSupabase } = useContext(ContextoListado);

    const comprobarListadoFormulario = () => {
        let formularioValido = true;
        let erroresFormulario = [];
        const listado = listadoCreado;

        if (listado['nombre'].length < 5) {
            erroresFormulario = [...erroresFormulario, erroresFormularioListado['nombre']];
        }
        if (listado['descripcion'].length < 25) {
            erroresFormulario = [...erroresFormulario, erroresFormularioListado['descripcion']];
        }

        if (erroresFormulario.length) {
            formularioValido = false;
            mostrarAviso({
                tipo: "error",
                titulo: "Fallo al registrar un nuevo listado",
                mensaje: `Comprueba que has rellenado el formulario de creación del listado correctamente:\n
                ${erroresFormulario.join('\n')}`
            });
        }

        return formularioValido;
    }
    return (
        <>
            <div id="cuerpoCrearListado">
                <h3>Registro de nueva lista de la compra</h3>
                <div id="contFormRegistrarListado">
                    <form>
                        <div className="campoFormulario">
                            <label htmlFor="nombre">Nombre: </label>
                            <input type="text" name="nombre" id="inputNombre" onInput={(evento) => {
                                actualizarDatoListado(evento.target.name, evento.target.value)
                            }} />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="descripcion">Descripción: </label>
                            <input type="text" name="descripcion" id="inputDescripcion" onInput={(evento) => {
                                actualizarDatoListado(evento.target.name, evento.target.value)
                            }} />
                        </div>

                        <div id="botonGuardar">
                            <input type="button" value="Guardar lista" onClick={async () => {
                                if (comprobarListadoFormulario()) {
                                    try {
                                        await agregarListadoSupabase(listadoCreado);
                                        mostrarAviso({
                                            tipo: "exito",
                                            titulo: "Listado registrado correctamente",
                                            mensaje: "Las listas de la compra almacenadas han sido actualizadas."
                                        });
                                    } catch (error) {
                                        mostrarAviso({
                                            tipo: "error",
                                            titulo: "Error al guardar la lista de compra",
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

export default CrearListado;