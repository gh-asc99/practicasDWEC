import "./FormularioRegistro.css";
import CampoFormulario from "../components/Formulario/CampoFormulario.jsx";
import { useEffect, useState } from "react";

const FormularioRegistro = () => {

    //localStorage.clear();

    const cargarListadoDiscosLocalStorage = () => {
        return JSON.parse(localStorage.getItem("listadoDiscos"));
    }

    const guardarListadoDiscosLocalStorage = () => {
        localStorage.setItem("listadoDiscos", JSON.stringify(listadoDiscos));
    }

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

    const listadoRecuperado = cargarListadoDiscosLocalStorage();
    const [listadoDiscos, setListadoDiscos] = useState(listadoRecuperado ? listadoRecuperado : []);

    const discoVacio = {
        nombre: "",
        caratula: "",
        artista: "",
        fecha: "",
        localizacion: "",
        genero: [],
        prestado: ""
    };

    const actualizarDisco = (inputsFormulario) => {
        const nuevoDisco = { ...discoVacio };

        let generos = [];

        inputsFormulario.map((input) => {
            const { name, value, type } = input;
            if (type === "text" || type === "url" || type === "number") {
                nuevoDisco[name] = value;
            }

            if (type === "checkbox" && input.checked) {
                generos = [...generos, value];
                nuevoDisco[name] = generos;
            }

            if (type === "radio" && input.checked) {
                nuevoDisco[name] = value;
            }
        });

        setListadoDiscos([...listadoDiscos, nuevoDisco]);
    }

    const validarFormulario = (evento) => {
        const formulario = evento.target.form;
        const inputsFormulario = Array.from(formulario.elements)
            .filter(el => el.type !== "button");

        const inputsTextNumber = inputsFormulario
            .filter(el => el.type === "text" || el.type === "number");

        const inputsCheckbox = inputsFormulario
            .filter(el => el.type === "checkbox");

        let codigosError = [];
        let idsError = [];

        inputsTextNumber.map((input) => {
            const codigo = validarInputTextNumber(input);
            if (codigo) {
                codigosError = [...codigosError, codigo];
                idsError = [...idsError, input.id];
            }
        });

        const errorGenero = validarInputCheckbox(inputsCheckbox);
        if (errorGenero) {
            codigosError = [...codigosError, errorGenero];
            idsError = [...idsError, errorGenero];//linea cambiada e incluida
        }

        setErrores(codigosError);
        setInputsConError(idsError);

        if (codigosError.length === 0) {
            setExito(true);
            actualizarDisco(inputsFormulario);

            formulario.reset();
        } else {
            setExito(false);
        }
    };


    const validarInputCheckbox = (listaCheckbox) => {
        const marcado = listaCheckbox.some(input => input.checked);
        if (!marcado) return "genero";
    };

    const validarInputTextNumber = (input) => {
        let error = "";

        if (input.type === "text") {
            if (input.id === "inputLocalizacion") {
                const pattern = new RegExp("^ES-[0-9]{3}[A-Z]{2}$");
                if (!pattern.test(input.value)) {
                    error = "localizacion";
                }
            } else {
                if (input.value.length < 5) {
                    error = input.id === "inputNombre" ? "nombre" : "artista";
                }
            }
        } else if (input.type === "number") {
            if (input.value < 1000 || input.value > 9999) {
                error = "fecha";
            }
        }

        return error;
    };

    useEffect(() => {
        const datos = cargarListadoDiscosLocalStorage();
        if (datos) setListadoDiscos(datos);
}, []);

    useEffect(() => {
        guardarListadoDiscosLocalStorage();
    }, [listadoDiscos]);

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