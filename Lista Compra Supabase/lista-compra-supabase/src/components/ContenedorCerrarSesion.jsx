import Contenedor from "./Contenedor.jsx"
import useSesion from "../hooks/useSesion.js";

const ContenedorCerrarSesion = (props) => {
    const { navegar, 
        cerrarSesion } = useSesion();
    return (
        <>
            <Contenedor titulo={props.titulo} clase={props.clase}>
                <input type="button" value="Cerrar sesión" onClick={() => {cerrarSesion(); navegar("/bienvenida")}}/>
            </Contenedor>
        </>
    )
}

export default ContenedorCerrarSesion;