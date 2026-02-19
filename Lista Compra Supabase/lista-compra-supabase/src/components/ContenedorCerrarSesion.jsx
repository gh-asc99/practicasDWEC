import Contenedor from "./Contenedor.jsx"
import useSesion from "../hooks/useSesion.js";
import perfil from "../assets/img/perfil.png";

const ContenedorCerrarSesion = (props) => {
    const { navegar, 
        cerrarSesion } = useSesion();
    return (
        <>
            <Contenedor titulo={props.titulo} clase={props.clase}>
                <input type="button" value="Cerrar sesión" onClick={() => {cerrarSesion(); navegar("/bienvenida")}}/>
                <img id="imagenPerfil" src={perfil} alt="Consultar perfil de usuario" onClick={() => {
                    navegar('/verPerfil');
                }}/>
            </Contenedor>
        </>
    )
}

export default ContenedorCerrarSesion;