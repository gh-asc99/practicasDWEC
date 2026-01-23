import { useContext } from "react";
import { ContextoSesion } from "../context/ProveedorSesion.jsx";
import "./SaludoUsuario.css";

const SaludoUsuario = () => {
    const { usuarioLogueado, nombreUsuario } = useContext(ContextoSesion);

    return usuarioLogueado ? (<h4 id="saludo">¡Hola {nombreUsuario}!</h4>) : "";
};

export default SaludoUsuario;
