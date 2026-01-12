import "./FormularioRegistro.css";
import CampoFormulario from "../components/Formulario/CampoFormulario.jsx";
import { useState } from "react";

const FormularioRegistro = () => {
    const [errores, setErrores] = useState([]);
    const [exito, setExito] = useState(false);

    const validarFormulario = (evento) => {
        let listaErrores = [];
        const formulario = evento.target.form;
        const inputsFormulario = Array.from(formulario.elements).filter((elemento) => elemento.type !== "button");
        const inputsTextNumber = inputsFormulario.filter((elemento) => elemento.type === "text" || elemento.type === "number");
        const inputsCheckbox = inputsFormulario.filter((elemento) => elemento.type === "checkbox");

        inputsTextNumber.map((input) => { if (validarInputTextNumber(input)) listaErrores = [...listaErrores, validarInputTextNumber(input)] });
        if (validarInputCheckbox(inputsCheckbox)) listaErrores = [...listaErrores, validarInputCheckbox(inputsCheckbox)];

        setErrores(listaErrores);

        if(listaErrores.length === 0){
            evento.target.ParentNode.ParentNode; //div contenedorFormulario
        }
        
    }

    const validarInputCheckbox = (listaCheckbox) => {
        let error = "";
        let marcado = false;
        listaCheckbox.map((input) => { if (input.checked === true) marcado = true; });
        if (!marcado) {
            error = (
            <>
            <strong>Error en género de música:</strong> Se debe seleccionar almenos un género.
            </>);
            }
        if (error) return error;
    }

    const validarInputTextNumber = (input) => {
        let error = "";
        if (input.type === "text") {
            if (input.id === "inputLocalizacion") {
                const pattern = new RegExp("^ES-[0-9]{3}[A-Z]{2}$");
                if (!pattern.test(input.value)) {
                    error = (
                        <>
                        <strong>Error en localización:</strong> El valor del campo debe respetar el siguiente formato: ES-001AA.
                        </>);
                }
            } else {
                if (input.value.length < 5) {
                    if (input.id === "inputNombre") {
                        error = (
                            <>
                            <strong>Error en nombre:</strong> El valor del campo debe contener almenos 5 carácteres.
                            </>);
                    } else {
                        error = (
                            <>
                            <strong>Error en grupo/artista:</strong> El valor del campo debe contener almenos 5 carácteres.
                            </>
                        );
                    }
                }

            }
        } else if (input.type === "number") {
            if (input.value < 1000 || input.value > 9999) {
                error = (
                    <>
                    <strong>Error en año de publicación:</strong> El valor del campo debe disponer de 4 cifras.
                    </>
                );
            }
        }
        if (error) return error;
    }

    return (
        <>
            <div id="cuerpoInsertarDisco">
                <div id="contenedorFormulario">
                    <h4>Registro de nuevo disco</h4>
                    <form>
                        <CampoFormulario inputNombre="inputNombre" inputTipo="text" campo="Nombre: "></CampoFormulario>
                        <CampoFormulario inputNombre="inputCaratula" inputTipo="url" campo="Carátula: "></CampoFormulario>
                        <CampoFormulario inputNombre="inputArtista" inputTipo="text" campo="Grupo/Intérprete: "></CampoFormulario>
                        <CampoFormulario inputNombre="inputFecha" inputTipo="number" campo="Año de publicación: "></CampoFormulario>
                        <CampoFormulario inputNombre="inputLocalizacion" inputTipo="text" campo="Localización: "></CampoFormulario>
                        <p><strong>Género de música:</strong></p>
                        <div className="opcionesCampo">
                            <CampoFormulario inputNombre="inputGeneroRap" inputTipo="checkbox" campo="Rap" valor="rap"></CampoFormulario>
                            <CampoFormulario inputNombre="inputGeneroRock" inputTipo="checkbox" campo="Rock" valor="rock"></CampoFormulario>
                            <CampoFormulario inputNombre="inputGeneroPop" inputTipo="checkbox" campo="Pop" valor="pop"></CampoFormulario>
                            <CampoFormulario inputNombre="inputGeneroIndie" inputTipo="checkbox" campo="Indie" valor="indie"></CampoFormulario>
                            <CampoFormulario inputNombre="inputGeneroTrap" inputTipo="checkbox" campo="Trap" valor="trap"></CampoFormulario>
                            <CampoFormulario inputNombre="inputGeneroUrbana" inputTipo="checkbox" campo="Urbana" valor="urbana"></CampoFormulario>
                        </div>
                        <p><strong>Disco prestado:</strong></p>
                        <div className="opcionesCampo">
                            <CampoFormulario inputNombre="inputPrestado" inputFor="opcionSi" inputID="opcionSi" inputTipo="radio" campo="Sí" valor="si"></CampoFormulario>
                            <CampoFormulario inputNombre="inputPrestado" inputFor="opcionNo" inputID="opcionNo" inputTipo="radio" campo="No" valor="no"></CampoFormulario>
                        </div>
                        <input type="button" id="inputGuardar" value="Guardar" onClick={(evento) => { validarFormulario(evento); }} />
                    </form>
                </div>
                <div id="contenedorExito" className={exito ? "" : "oculto"}>

                </div>
                <div id="contenedorErrores" className={errores.length > 0 ? "" : "oculto"}>
                    {errores.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>

            </div>
        </>
    )
}

export default FormularioRegistro;