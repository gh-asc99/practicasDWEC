"use strict";
import "./Cabecera.css";

const Cabecera = (props) => {
    return(
        <>
        <div className="cabecera_pagina">
            <h2 className="titulo_pagina">{props.titulo}</h2>
            <div>
                {props.children}
            </div>
        </div>
        </>
    );
};

export default Cabecera;