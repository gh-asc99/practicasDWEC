"use strict";

import "./InsertarDisco.css";

const InsertarDisco = () => {
    return (
        <>
            <div className="paginaInsertarDisco">
                <form>
                    <fieldset>
                        <legend><strong>Registro de nuevo disco</strong></legend>
                        <label for="nombre">Nombre: </label>
                        <input type="text" name="nombre" id="nombre" placeholder="Nombre del disco." autofocus /> <br />
                        <label for="caratula">Carátula: </label>
                        <input type="url" name="caratula" id="caratula" placeholder="URL de la carátula del disco." /><br />
                        <label for="interprete">Grupo/Intérprete: </label>
                        <input type="text" name="interprete" id="interprete" placeholder="Nombre del grupo/autor musical." /><br />
                        <label for="year">Año de Publicación: </label>
                        <input type="number" name="year" id="year" min="1887" max="2025" placeholder="Año en el que fue publicado." /><br />
                        <fieldset>
                            <legend> <span id="checkboxGenerosMusicales"> <strong>Género de música</strong> </span> </legend>
                            <input type="checkbox" name="generoRock" id="generoRock" className="generoMusical" />
                            <label for="generoRock" className="nombreGenero">Rock and roll</label>
                            <input type="checkbox" name="generoPop" id="generoPop" className="generoMusical" />
                            <label for="generoPop" className="nombreGenero">Pop</label>
                            <input type="checkbox" name="generoReggaeton" id="generoReggaeton" className="generoMusical" />
                            <label for="generoReggaeton" className="nombreGenero">Reggaeton</label>
                            <input type="checkbox" name="generoRap" id="generoRap" className="generoMusical" />
                            <label for="generoRap" className="nombreGenero">Rap</label>
                        </fieldset>
                        <label for="localizacion">Localización: </label>
                        <input type="text" name="localizacion" id="localizacion" placeholder="Localización para guardarlo." />
                        <fieldset>
                            <legend><strong>Prestado</strong></legend>
                            <input type="radio" name="prestado" id="si" value="si" />
                            <label for="si">Sí</label>
                            <input type="radio" name="prestado" id="no" value="no" checked />
                            <label for="no">No</label>
                        </fieldset>
                        <input type="button" className="botonFormulario" id="botonGuardar" value="Guardar" />
                        <script type="module" src="main.js"></script>
                    </fieldset>
                </form>
            </div>
        </>
    );
};

export default InsertarDisco;