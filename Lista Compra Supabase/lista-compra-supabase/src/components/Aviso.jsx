import { useContext } from "react";
import "./Aviso.css";
import { ContextoSesion } from "../context/ProveedorSesion.jsx";

const Aviso = () => {
    const { aviso, ocultarAviso } = useContext(ContextoSesion);

    if (!aviso.visible) return null;

    const claseBase =
        aviso.tipo === "mensaje" ? "contenedorAviso" : "error";

    const clasePosicion =
        aviso.origen === "registro" ? "avisoRegistro" : "avisoLogin";

    return (
        <div className={`${claseBase} ${clasePosicion}`}>
            <h4>{aviso.titulo}</h4>
            <p>{aviso.descripcion}</p>
            <input
                type="button"
                value="De acuerdo"
                onClick={ocultarAviso}
            />
        </div>
    );
};

export default Aviso;
