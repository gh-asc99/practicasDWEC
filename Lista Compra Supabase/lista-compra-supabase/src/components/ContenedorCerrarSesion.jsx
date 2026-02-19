import Contenedor from "./Contenedor.jsx"
import useSesion from "../hooks/useSesion.js";
import perfil from "../assets/img/perfil.png";
import usePerfil from "../hooks/usePerfil.js";
import { useEffect, useState } from "react";

const ContenedorCerrarSesion = (props) => {
    const { navegar, cerrarSesion, traerIdUsuarioLogueado } = useSesion();
    const { listaPerfiles, traerDatosPerfilesPorId } = usePerfil();

    const [avatarUsuario, setAvatarUsuario] = useState(perfil);

    useEffect(() => {
        const cargarAvatar = async () => {
            const id = await traerIdUsuarioLogueado();
            const datosPerfil = traerDatosPerfilesPorId(id);

            if (datosPerfil && datosPerfil.avatar) {
                setAvatarUsuario(datosPerfil.avatar);
            } else {
                setAvatarUsuario(perfil);
            }
        };
        if (listaPerfiles && listaPerfiles.length > 0) {
            cargarAvatar();
        }
    }, [listaPerfiles]);
    return (
        <>
            <Contenedor titulo={props.titulo} clase={props.clase}>
                <input type="button" value="Cerrar sesión" onClick={() => {cerrarSesion(); navegar("/bienvenida")}}/>
                <img id="imagenPerfil" src={avatarUsuario} alt="Consultar perfil de usuario" onClick={() => {
                    navegar('/verPerfil');
                }}/>
            </Contenedor>
        </>
    )
}

export default ContenedorCerrarSesion;