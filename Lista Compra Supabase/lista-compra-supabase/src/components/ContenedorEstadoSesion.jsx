import { useContext } from "react";
import { ContextoSesion } from "../context/ProveedorSesion.jsx";
import ContenedorIniciarSesion from "./ContenedorIniciarSesion.jsx";
import ContenedorCerrarSesion from "./ContenedorCerrarSesion.jsx";

const ContenedorEstadoSesion = () => {
    const { usuarioLogueado } = useContext(ContextoSesion);
    let contenido;
    if (!usuarioLogueado) {
        contenido = (<>
        <ContenedorIniciarSesion titulo = "¡Accede ya!" clase = "iniciarSesion"/>
        </>)
    } else {
        contenido = (<>
        <ContenedorCerrarSesion clase = "cerrarSesion"/>
        </>)
    }
    return (
        <>
            {contenido}
        </>
    )
}

export default ContenedorEstadoSesion;