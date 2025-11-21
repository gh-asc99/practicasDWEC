"use strict";

import "./PiePagina.css";

const PiePagina = (props) => {
    return (
        <>
        <footer className="footerPagina">
            <small className="datoFooter">Autor de la página: <strong>{props.autor}</strong> </small>
            <small className="datoFooter">Asignatura: <strong>{props.asignatura}</strong> </small>
            <small className="datoFooter">Curso: <strong>{props.curso}</strong> </small>
        </footer>
        </>
    );
};

export default PiePagina;