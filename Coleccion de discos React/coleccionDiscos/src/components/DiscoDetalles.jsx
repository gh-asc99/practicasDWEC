import { arrayToString } from "../functions/biblioteca.js";
import "./DiscoDetalles.css";
import papelera from "../assets/img/papelera.png";
import { useState } from "react";

const DiscoDetalles = ({ datos }) => {
    const [ocultar, setOcultar] = useState(true);
    let generosFormateados = arrayToString(datos.genero);

    return (
        <>
            <div id="plantillaCompleta">
                <div id="plantillaDisco">
                    <div id="datosPrimarios">
                        <img id="portadaDisco" src={datos.caratula} alt="Portada del disco" onClick={() => {setOcultar(!ocultar);}}/>
                        <div id="detallesPrimarios" onClick={() => {setOcultar(!ocultar);}}>
                            <div id="detallesNombreArtista">
                                <h4>{datos.nombre}</h4>
                                <p>de <strong>{datos.artista}</strong></p>
                            </div>
                            <div id="detallesGenero">
                                <small><strong>Género/s: </strong>{generosFormateados}</small>
                            </div>
                        </div>
                        <div id="botones">
                            <img src={papelera} alt="Eliminar disco" />
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