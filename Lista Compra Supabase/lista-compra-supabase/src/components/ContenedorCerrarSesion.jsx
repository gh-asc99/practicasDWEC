import Contenedor from "./Contenedor.jsx"
import { useContext } from "react";
import { ContextoSesion } from "../context/ProveedorSesion.jsx";

const ContenedorCerrarSesion = (props) => {
    const { navegar, cerrarSesion } = useContext(ContextoSesion);
    return (
        <>
            <Contenedor titulo={props.titulo} clase={props.clase}>
                <input type="button" value="Cerrar sesión" onClick={() => {cerrarSesion(); navegar("/bienvenida")}}/>
            </Contenedor>
        </>
    )
}

export default ContenedorCerrarSesion;