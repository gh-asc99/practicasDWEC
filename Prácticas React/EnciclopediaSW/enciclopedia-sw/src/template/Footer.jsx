"use strict";

import "./Footer.css";

const Footer = (props) => {
    return (
        <>
            <footer>
                <small><strong>Autor: </strong>{props.autor}</small>
                <small><strong>Asignatura: </strong>{props.asignatura}</small>
                <small><strong>Curso: </strong>{props.curso}</small>
            </footer>
        </>
    );
}

export default Footer;