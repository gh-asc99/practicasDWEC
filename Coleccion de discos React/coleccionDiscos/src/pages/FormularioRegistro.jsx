import "./FormularioRegistro.css";
import CampoFormulario from "../components/Formulario/CampoFormulario.jsx";
import { useContext, useEffect, useState } from "react";
import { ContextoDiscos } from "../context/ProveedorDiscos.jsx";

const FormularioRegistro = () => {

    const { listadoDiscos, addDisco, validarDisco } = useContext(ContextoDiscos)

    //localStorage.clear();

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

    const validarFormulario = (evento) => {
        const formulario = evento.target.form;
        const disco = obtenerDatosFormulario(formulario);

        const errores = validarDisco(disco);
        setInputsConError(errores);

        if (errores.length === 0) {
            setErrores([]);
            addDisco(disco);
            setExito(true);
            formulario.reset();
        } else {
            setErrores(errores);
            setExito(false);
        }
    };

    const obtenerDatosFormulario = (formulario) => {
        const formData = new FormData(formulario);

        return {
            nombre: formData.get("nombre"),
            caratula: formData.get("caratula"),
            artista: formData.get("artista"),
            fecha: Number(formData.get("fecha")),
            localizacion: formData.get("localizacion"),
            genero: formData.getAll("genero"),
            prestado: formData.get("prestado")
        };
    };

    //pruebas
    useEffect(() => {
        console.log(listadoDiscos);
    }, [listadoDiscos]);
    //pruebas

    return (
        <>
            <div id="cuerpoInsertarDisco">
                <div id="contenedorFormulario">
                    <h4>Registro de nuevo disco</h4>
                    <form>
                        <CampoFormulario inputsConError={inputsConError} inputNombre="nombre" inputTipo="text" campo="Nombre: " campoID="inputNombre" ></CampoFormulario>
                        <CampoFormulario inputsConError={inputsConError} inputNombre="caratula" inputTipo="url" campo="Carátula: " campoID="inputCaratula"></CampoFormulario>
                        <CampoFormulario inputsConError={inputsConError} inputNombre="artista" inputTipo="text" campo="Grupo/Intérprete: " campoID="inputArtista"></CampoFormulario>
                        <CampoFormulario inputsConError={inputsConError} inputNombre="fecha" inputTipo="number" campo="Año de publicación: " campoID="inputFecha"></CampoFormulario>
                        <CampoFormulario inputsConError={inputsConError} inputNombre="localizacion" inputTipo="text" campo="Localización: " campoID="inputLocalizacion"></CampoFormulario>
                        <p><strong>Género de música:</strong></p>
                        <div className="opcionesCampo">
                            <CampoFormulario inputsConError={inputsConError} inputNombre="genero" inputTipo="checkbox" campo="Rap" valor="rap" campoID="inputGeneroRap"></CampoFormulario>
                            <CampoFormulario inputsConError={inputsConError} inputNombre="genero" inputTipo="checkbox" campo="Rock" valor="rock" campoID="inputGeneroRock"></CampoFormulario>
                            <CampoFormulario inputsConError={inputsConError} inputNombre="genero" inputTipo="checkbox" campo="Pop" valor="pop" campoID="inputGeneroPop"></CampoFormulario>
                            <CampoFormulario inputsConError={inputsConError} inputNombre="genero" inputTipo="checkbox" campo="Indie" valor="indie" campoID="inputGeneroIndie"></CampoFormulario>
                            <CampoFormulario inputsConError={inputsConError} inputNombre="genero" inputTipo="checkbox" campo="Trap" valor="trap" campoID="inputGeneroTrap"></CampoFormulario>
                            <CampoFormulario inputsConError={inputsConError} inputNombre="genero" inputTipo="checkbox" campo="Urbana" valor="urbana" campoID="inputGeneroUrbana"></CampoFormulario>
                        </div>
                        <p><strong>Disco prestado:</strong></p>
                        <div className="opcionesCampo">
                            <CampoFormulario inputsConError={inputsConError} inputNombre="prestado" inputFor="opcionSi" inputTipo="radio" campo="Sí" valor="si" campoID="inputSi"></CampoFormulario>
                            <CampoFormulario inputsConError={inputsConError} inputNombre="prestado" inputFor="opcionNo" inputTipo="radio" campo="No" valor="no" campoID="inputNo"></CampoFormulario>
                        </div>
                        <input type="button" id="inputGuardar" value="Guardar" onClick={(evento) => { validarFormulario(evento); }} />
                    </form>
                </div>

                <div id="contenedorExito" className={exito ? "" : "oculto"}>
                    <h4>El disco ha sido almacenado correctamente</h4>
                    <p>Ahora puedes consultarlo en <em>Listar discos</em>.</p>
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