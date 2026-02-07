import ContenedorIniciarSesion from "./ContenedorIniciarSesion.jsx";
import ContenedorCerrarSesion from "./ContenedorCerrarSesion.jsx";
import useSesion from "../hooks/useSesion.js";

const ContenedorEstadoSesion = () => {
    const { usuarioLogueado } = useSesion();
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