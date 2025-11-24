"use strict";

import "./InsertarDisco.css";
import { useEffect, useState } from "react";

const InsertarDisco = () => {

    const almacenados = localStorage.getItem("discos")
        ? JSON.parse(localStorage.getItem("discos"))
        : [];

    const [discosIncluidos, setDiscosIncluidos] = useState(almacenados);

    const formularioInicial = {
        nombre: "",
        caratula: "",
        interprete: "",
        year: "",
        genero: [],
        localizacion: "",
        prestado: "no"
    };

    const [formulario, setFormulario] = useState(formularioInicial);

    const actualizarFormulario = (evento) => {
        const { name, id, value, type, checked } = evento.target;

        if (type === "checkbox") {
            let nuevosGeneros = formulario.genero;

            if (checked) {
                nuevosGeneros = [...nuevosGeneros, id];
            } else {
                nuevosGeneros = nuevosGeneros.filter(genero => genero !== id);
            }

            setFormulario({ ...formulario, genero: nuevosGeneros });
            return;
        }

        setFormulario({ ...formulario, [name]: value });
    };


    const avisoInicial = [];
    const [avisos, setAvisos] = useState(avisoInicial);

    const validarFormulario = () => {
        let listaErrores = [];

        if (formulario.nombre.length < 5) {
            listaErrores = [
                ...listaErrores,
                "El nombre debe tener al menos 5 caracteres."
            ];
        }

        if (formulario.interprete.length < 5) {
            listaErrores = [
                ...listaErrores,
                "El intérprete debe tener al menos 5 caracteres."
            ];
        }

        const formato = /^ES-[0-9]{3}[A-Z]{2}$/;
        if (!formato.test(formulario.localizacion)) {
            listaErrores = [
                ...listaErrores,
                "La localización debe seguir el formato ES-000AA."
            ];
        }

        if (formulario.year < 1000 || formulario.year > 9999) {
            listaErrores = [
                ...listaErrores,
                "El año debe tener 4 dígitos."
            ];
        }

        if (formulario.genero.length === 0) {
            listaErrores = [
                ...listaErrores,
                "Debes seleccionar al menos un género musical."
            ];
        }

        setAvisos(listaErrores);

        return listaErrores.length === 0;
    };

    const guardarDisco = () => {
        const nuevo = { ...formulario };

        const nuevosDiscos = [...discosIncluidos, nuevo];
        setDiscosIncluidos(nuevosDiscos);

        setFormulario(formularioInicial);
    };

    useEffect(() => {
        const almacenados = JSON.parse(localStorage.getItem("discos")) || [];
        setDiscosIncluidos(almacenados);
    }, []);

    useEffect(() => {
        localStorage.setItem("discos", JSON.stringify(discosIncluidos));
    }, [discosIncluidos]);

    return (
        <>
            <div className="paginaInsertarDisco">
                <form>
                    <fieldset>
                        <legend><strong>Registro de nuevo disco</strong></legend>

                        <label htmlFor="nombre">Nombre: </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre del disco."
                            autoFocus
                            value={formulario.nombre}
                            onChange={actualizarFormulario}
                        /><br />

                        <label htmlFor="caratula">Carátula: </label>
                        <input
                            type="url"
                            id="caratula"
                            name="caratula"
                            placeholder="URL de la carátula"
                            value={formulario.caratula}
                            onChange={actualizarFormulario}
                        /><br />

                        <label htmlFor="interprete">Grupo/Intérprete: </label>
                        <input
                            type="text"
                            id="interprete"
                            name="interprete"
                            placeholder="Nombre del grupo"
                            value={formulario.interprete}
                            onChange={actualizarFormulario}
                        /><br />

                        <label htmlFor="year">Año de publicación: </label>
                        <input
                            type="number"
                            id="year"
                            name="year"
                            min="1887"
                            max="2025"
                            placeholder="Año"
                            value={formulario.year}
                            onChange={actualizarFormulario}
                        /><br />

                        <fieldset>
                            <legend><strong>Géneros musicales</strong></legend>

                            <input
                                type="checkbox"
                                id="rock"
                                checked={formulario.genero.includes("rock")}
                                onChange={actualizarFormulario}
                            />
                            <label htmlFor="rock">Rock</label>

                            <input
                                type="checkbox"
                                id="pop"
                                checked={formulario.genero.includes("pop")}
                                onChange={actualizarFormulario}
                            />
                            <label htmlFor="pop">Pop</label>

                            <input
                                type="checkbox"
                                id="reggaeton"
                                checked={formulario.genero.includes("reggaeton")}
                                onChange={actualizarFormulario}
                            />
                            <label htmlFor="reggaeton">Reggaeton</label>

                            <input
                                type="checkbox"
                                id="rap"
                                checked={formulario.genero.includes("rap")}
                                onChange={actualizarFormulario}
                            />
                            <label htmlFor="rap">Rap</label>
                        </fieldset>

                        <label htmlFor="localizacion">Localización: </label>
                        <input
                            type="text"
                            id="localizacion"
                            name="localizacion"
                            placeholder="ES-000AA"
                            value={formulario.localizacion}
                            onChange={actualizarFormulario}
                        /><br />

                        <fieldset>
                            <legend><strong>Prestado</strong></legend>

                            <input
                                type="radio"
                                id="si"
                                name="prestado"
                                value="si"
                                checked={formulario.prestado === "si"}
                                onChange={actualizarFormulario}
                            />
                            <label htmlFor="si">Sí</label>

                            <input
                                type="radio"
                                id="no"
                                name="prestado"
                                value="no"
                                checked={formulario.prestado === "no"}
                                onChange={actualizarFormulario}
                            />
                            <label htmlFor="no">No</label>
                        </fieldset>

                        <input
                            type="button"
                            className="botonFormulario"
                            value="Guardar"
                            onClick={() => {
                                if (validarFormulario()) guardarDisco();
                            }}
                        />
                    </fieldset>
                </form>

                <div className="contenedorInformacion">
                    <h4>Contenedor de información</h4>
                    <h6>(Aquí se muestran los posibles errores en los campos del formulario).</h6>
                    <div className="errores">
                        {avisos.map((aviso, index) => (
                            <p className="error" key={index}>
                                {aviso}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default InsertarDisco;