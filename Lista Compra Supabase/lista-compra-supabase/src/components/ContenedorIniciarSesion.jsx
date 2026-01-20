import Contenedor from "./Contenedor.jsx"
import { useContext } from "react";
import { ContextoSesion } from "../context/ProveedorSesion.jsx";

const ContenedorIniciarSesion = (props) => {
    const { navegar } = useContext(ContextoSesion);
    return (
        <>
            <Contenedor titulo={props.titulo} clase={props.clase}>
                <input type="button" value="Iniciar sesión" onClick={() => {navegar("/accesoApp")}}/>
            </Contenedor>
        </>
    )
}

export default ContenedorIniciarSesion;