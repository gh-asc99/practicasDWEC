import { arrayToString } from "../functions/biblioteca.js";
import "./DiscoDetalles.css";
import papelera from "../assets/img/papelera.png";
import { useState } from "react";
import useDiscos from "../hooks/useDisco.js";
import { Link } from "react-router-dom";

const DiscoDetalles = ({ datos }) => {
    const [ocultar, setOcultar] = useState(true);
    let generosFormateados = arrayToString(datos.genero);
    const { eliminarDisco } = useDiscos();

    return (
        <>
            <div id="plantillaCompleta">
                <div id="plantillaDisco">
                    <div id="datosPrimarios">
                        <img id="portadaDisco" src={datos.caratula} alt="Portada del disco" onClick={() => { setOcultar(!ocultar); }} />
                        <div id="detallesPrimarios" onClick={() => { setOcultar(!ocultar); }}>
                            <div id="detallesNombreArtista">
                                <h4>{datos.nombre}</h4>
                                <p>de <strong>{datos.artista}.</strong></p>
                            </div>
                            <div id="detallesGenero">
                                <small><strong>Género/s: </strong>{generosFormateados}</small>
                            </div>
                        </div>
                        <div id="botones">
                            <div id="botonEditar">
                                <Link to={`/listadoDiscos/${datos.id}`}>Editar</Link>
                            </div>
                            <img src={papelera} alt="Eliminar disco" onClick={() => {
                                let pregunta = confirm(`¿Estas seguro/a de borrar el disco ${datos.nombre}?`);
                                if (pregunta) { eliminarDisco(datos.id); }
                            }} />
                        </div>
                    </div>
                    <div id="datosSecundarios" className={ocultar ? "oculto" : ""}>
                        <p><strong>Fecha: </strong>{datos.fecha}</p>
                        <p><strong>Localización: </strong>{datos.localizacion}</p>
                        <p><strong>Prestado: </strong>{datos.prestado}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscoDetalles;