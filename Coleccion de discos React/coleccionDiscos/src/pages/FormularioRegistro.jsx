import "./FormularioRegistro.css";
import CampoFormulario from "../components/Formulario/CampoFormulario.jsx";
import { useEffect, useState } from "react";
import useDiscos from "../hooks/useDisco.js";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const FormularioRegistro = () => {

    const navigate = useNavigate();

    const [disco, setDisco] = useState({
        nombre: "",
        caratula: "",
        artista: "",
        fecha: "",
        localizacion: "",
        genero: [],
        prestado: ""
    });

    const { validarDisco, guardarOActualizarDisco, obtenerDiscoPorId, listadoDiscos } = useDiscos();

    const { id } = useParams();
    const modoEdicion = Boolean(id);

    const mensajesError = {
        nombre: (
            <>
                <strong>Error en nombre:</strong> El valor del campo debe contener al menos 5 caracteres.
            </>
        ),
        artista: (
            <>
                <strong>Error en grupo/artista:</strong> El valor del campo debe contener al menos 5 caracteres.
            </>
        ),
        fecha: (
            <>
                <strong>Error en año de publicación:</strong> El valor del campo debe disponer de 4 cifras.
            </>
        ),
        localizacion: (
            <>
                <strong>Error en localización:</strong> El valor del campo debe respetar el siguiente formato: ES-001AA.
            </>
        ),
        genero: (
            <>
                <strong>Error en género de música:</strong> Se debe seleccionar al menos un género.
            </>
        )
    };

    const [inputsConError, setInputsConError] = useState([]);
    const [errores, setErrores] = useState([]);
    const [exito, setExito] = useState(false);

    const volverAListado = () => {
        if (modoEdicion) {
            if (exito) {
                navigate('/listadoDiscos');
            }
        }
    };

    const validarFormulario = () => {
        const errores = validarDisco(disco);
        setInputsConError(errores);

        if (errores.length === 0) {
            setErrores([]);
            setInputsConError([]);
            guardarOActualizarDisco({
                ...disco,
                id: modoEdicion ? id : ""
            });
            setExito(true);
        } else {
            setErrores(errores);
            setExito(false);
        }
    };

    const handleChange = (evento) => {
        const { name, value, type, checked } = evento.target;

        setDisco(discoPrevio => {
            if (type === "checkbox") {
                return {
                    ...discoPrevio,
                    genero: checked
                        ? [...discoPrevio.genero, value]
                        : discoPrevio.genero.filter(g => g !== value)
                };
            }

            return {
                ...discoPrevio,
                [name]: type === "number" ? Number(value) : value
            };
        });
    };

    useEffect(() => {
        if (modoEdicion) {
            const discoEditar = obtenerDiscoPorId(id);
            if (discoEditar) {
                setDisco(discoEditar);
            }
        }
    }, [modoEdicion, id, listadoDiscos]);

    useEffect(() => {
        volverAListado();
    }, [disco]);

    return (
        <>
            <div id="cuerpoInsertarDisco">
                <div id="contenedorFormulario">
                    <h4>{modoEdicion ? "Editar disco" : "Registro de nuevo disco"}</h4>
                    <form>
                        <CampoFormulario inputsConError={inputsConError} inputNombre="nombre" inputTipo="text" campo="Nombre: " campoID="inputNombre" valor={disco.nombre} onChange={(evento) => handleChange(evento)} />
                        <CampoFormulario inputsConError={inputsConError} inputNombre="caratula" inputTipo="url" campo="Carátula: " campoID="inputCaratula" valor={disco.caratula} onChange={(evento) => handleChange(evento)} />
                        <CampoFormulario inputsConError={inputsConError} inputNombre="artista" inputTipo="text" campo="Grupo/Intérprete: " campoID="inputArtista" valor={disco.artista} onChange={(evento) => handleChange(evento)} />
                        <CampoFormulario inputsConError={inputsConError} inputNombre="fecha" inputTipo="number" campo="Año de publicación: " campoID="inputFecha" valor={disco.fecha} onChange={(evento) => handleChange(evento)} />
                        <CampoFormulario inputsConError={inputsConError} inputNombre="localizacion" inputTipo="text" campo="Localización: " campoID="inputLocalizacion" valor={disco.localizacion} onChange={(evento) => handleChange(evento)} />
                        <p><strong>Género de música:</strong></p>
                        <div className="opcionesCampo">
                            <CampoFormulario inputsConError={inputsConError} inputNombre="genero" inputTipo="checkbox" campo="Rap" valor="rap" campoID="inputGeneroRap" checked={disco.genero.includes("rap")} onChange={(evento) => handleChange(evento)} />
                            <CampoFormulario inputsConError={inputsConError} inputNombre="genero" inputTipo="checkbox" campo="Rock" valor="rock" campoID="inputGeneroRock" checked={disco.genero.includes("rock")} onChange={(evento) => handleChange(evento)} />
                            <CampoFormulario inputsConError={inputsConError} inputNombre="genero" inputTipo="checkbox" campo="Pop" valor="pop" campoID="inputGeneroPop" checked={disco.genero.includes("pop")} onChange={(evento) => handleChange(evento)} />
                            <CampoFormulario inputsConError={inputsConError} inputNombre="genero" inputTipo="checkbox" campo="Indie" valor="indie" campoID="inputGeneroIndie" checked={disco.genero.includes("indie")} onChange={(evento) => handleChange(evento)} />
                            <CampoFormulario inputsConError={inputsConError} inputNombre="genero" inputTipo="checkbox" campo="Trap" valor="trap" campoID="inputGeneroTrap" checked={disco.genero.includes("trap")} onChange={(evento) => handleChange(evento)} />
                            <CampoFormulario inputsConError={inputsConError} inputNombre="genero" inputTipo="checkbox" campo="Urbana" valor="urbana" campoID="inputGeneroUrbana" checked={disco.genero.includes("urbana")} onChange={(evento) => handleChange(evento)} />
                        </div>
                        <p><strong>Disco prestado:</strong></p>
                        <div className="opcionesCampo">
                            <CampoFormulario inputsConError={inputsConError} inputNombre="prestado" inputFor="opcionSi" inputTipo="radio" campo="Sí" valor="si" campoID="inputSi" checked={disco.prestado === "si"} onChange={(evento) => handleChange(evento)}></CampoFormulario>
                            <CampoFormulario inputsConError={inputsConError} inputNombre="prestado" inputFor="opcionNo" inputTipo="radio" campo="No" valor="no" campoID="inputNo" checked={disco.prestado === "no"} onChange={(evento) => handleChange(evento)}></CampoFormulario>
                        </div>
                        <input type="button" id="inputGuardar" value={modoEdicion ? "Actualizar datos" : "Guardar"}
                            onClick={() => validarFormulario()} />
                    </form>
                </div>

                <div id="contenedorExito" className={exito ? "" : "oculto"}>
                    <h4>
                        {modoEdicion
                            ? "El disco ha sido actualizado correctamente"
                            : "El disco ha sido almacenado correctamente"}
                    </h4>

                    {modoEdicion ? (
                        <p>Recarga la página para ver el nuevo listado.</p>
                    ) : (
                        <p>
                            Ahora puedes consultarlo en <em>Listar discos</em>.
                        </p>
                    )}
                </div>

                <div id="contenedorErrores" className={errores.length > 0 ? "" : "oculto"}>
                    {errores.map((codigo, index) => (
                        <p key={index}>{mensajesError[codigo]}</p>
                    ))}
                </div>

            </div>
        </>
    )
}

export default FormularioRegistro;