import Contenedor from "./Contenedor.jsx"
import useSesion from "../hooks/useSesion.js";

const ContenedorIniciarSesion = (props) => {
    const { navegar } = useSesion();
    return (
        <>
            <Contenedor titulo={props.titulo} clase={props.clase}>
                <input type="button" value="Registro e inicio de sesión" onClick={() => {navegar("/accesoApp")}}/>
            </Contenedor>
        </>
    )
}

export default ContenedorIniciarSesion;