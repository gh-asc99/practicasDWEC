import { useContext } from "react";
import "./Aviso.css";
import { ContextoSesion } from "../context/ProveedorSesion.jsx";

const Aviso = (props) => {

const { avisoVisible, ocultarAviso } = useContext(ContextoSesion);

    return(
        <>
            <div className={avisoVisible ? "contenedorAviso" : "oculto"}>
                <h4>{props.titulo}</h4>
                <p>{props.descripcion}</p>
                <input type="button" value="De acuerdo" onClick={(evento) => {
                    evento.target.parentElement.classList.add("oculto");
                    ocultarAviso();
                }}/>
            </div>
        </>
    )
}

export default Aviso;