import "./SaludoUsuario.css";
import useSesion from "../hooks/useSesion.js";

const SaludoUsuario = () => {
    const { usuarioLogueado, 
        nombreUsuario } = useSesion();

    return usuarioLogueado ? (<h4 id="saludo">¡Hola {nombreUsuario}!</h4>) : "";
};

export default SaludoUsuario;
