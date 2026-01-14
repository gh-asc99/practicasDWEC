import { arrayToString } from "../functions/biblioteca.js";
import "./DiscoDetalles.css";

const DiscoDetalles = ({ datos }) => {
    let generosFormateados = arrayToString(datos.genero);
    return (
        <>
            <div id="plantillaDisco">
                <div id="datosPrimarios">
                    <img id="portadaDisco" src={datos.caratula} alt="Portada del disco" />
                    <div id="detallesPrimarios">
                        <h4>{datos.nombre}</h4>
                        <p>de <strong>{datos.artista}</strong></p>
                        <div>
                            <small><strong>Género/s: </strong>{generosFormateados}</small>
                        </div>
                    </div>
                </div>
                <div id="datosSecundarios">
                    <p><strong>Fecha: </strong>{datos.fecha}</p>
                    <p><strong>Localización: </strong>{datos.localizacion}</p>
                    <p><strong>Prestado: </strong>{datos.prestado}</p>
                </div>
            </div>
        </>
    )
}

export default DiscoDetalles;