import perfil from "../assets/img/perfil.png";
import "./VerPerfil.css";
import usePerfil from "../hooks/usePerfil.js";
import useSesion from "../hooks/useSesion.js";
import useAviso from "../hooks/useAviso.js";
import { useEffect, useState} from "react";
import ImagenesPerfil from "../components/ImagenesPerfil.jsx";

const VerPerfil = () => {

    const {
        listaPerfiles,
        traerDatosPerfilesPorId,
        traerPerfilesSupabase,
        actualizarPerfilesSupabase
    } = usePerfil();

    const {
        traerIdUsuarioLogueado
    } = useSesion();
    const { mostrarAviso } = useAviso();

    const [perfilUsuario, setPerfilUsuario] = useState(null);
    const [nombreEditado, setNombreEditado] = useState("");
    const [descripcionEditada, setDescripcionEditada] = useState("");
    const [modoCambiarImagen, setModoCambiarImagen] = useState(false);

    const cargarDatos = async () => {
        await traerPerfilesSupabase();
            const id = await traerIdUsuarioLogueado();
            const datosPerfil = traerDatosPerfilesPorId(id);

            if (datosPerfil) {
                setPerfilUsuario(datosPerfil);
                setNombreEditado(datosPerfil.nombre || "");
                setDescripcionEditada(datosPerfil.descripcion || "");
            }
    };

    useEffect(() => {
        cargarDatos();
        setModoCambiarImagen(false);
    }, []);

    useEffect(() => {
        const actualizarAvatarEnTiempoReal = async () => {
            const id = await traerIdUsuarioLogueado();
            const datosPerfil = traerDatosPerfilesPorId(id);
            
            if (datosPerfil) {
                setPerfilUsuario(datosPerfil); 
                setNombreEditado((prev) => prev !== "" ? prev : (datosPerfil.nombre || ""));
                setDescripcionEditada((prev) => prev !== "" ? prev : (datosPerfil.descripcion || ""));
            }
        };

        if (listaPerfiles.length > 0) {
            actualizarAvatarEnTiempoReal();
        }
    }, [listaPerfiles]);

    if (!perfilUsuario) {
        return <p>Cargando perfil...</p>;
    }

    const avatar = perfilUsuario.avatar || perfil;


    return (
        <>
            <div id='cuerpoVerPerfil'>
                <h3 id='tituloPagina'>Datos de usuario</h3>
                <div id='formDatosUsuario'>
                    <form>
                        <img src={avatar} alt="Foto de perfíl" onClick={() => {setModoCambiarImagen(!modoCambiarImagen)}}/>
                        <div className="campoFormulario">
                            <label htmlFor="nombre">Nombre: </label>
                            <input type="text" name="nombre" id="inputNombre" defaultValue={nombreEditado} onChange={(evento) => {
                                setNombreEditado(evento.target.value);
                            }} />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="descripcion">Descripción: </label>
                            <input type="text" name="descripcion" id="inputDescripcion" defaultValue={descripcionEditada} onChange={(evento) => {
                                setDescripcionEditada(evento.target.value);
                            }} />
                        </div>
                        <div id="botonActualizarPerfil">
                            <input type="button" value="Actualizar perfil" onClick={async () => {
                                try {
                                    await actualizarPerfilesSupabase({
                                        id: perfilUsuario.id,
                                        avatar: perfilUsuario.avatar,
                                        nombre: nombreEditado,
                                        descripcion: descripcionEditada
                                    });
                                    mostrarAviso({
                                        tipo: "exito",
                                        titulo: "Perfil actualizado correctamente",
                                        mensaje: "La lista de perfiles registrados ha sido actualizada."
                                    });
                                } catch (error) {
                                    mostrarAviso({
                                        tipo: "error",
                                        titulo: "Error al actualizar el perfil",
                                        mensaje: error.message
                                    });
                                }

                            }} />
                        </div>
                    </form>
                </div>
                {modoCambiarImagen && (<ImagenesPerfil/>)}
            </div>
        </>
    )
}

export default VerPerfil