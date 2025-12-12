import React from "react";
import "./Contenedor.css";

const Contenedor = (props) => {
    let estilo = "";
    if (props.tipo === "pie"){
        estilo = "pie_de_pagina";
    } else if (props.tipo === "cuerpo"){
        estilo = "cuerpo_de_pagina";
    } else {
        estilo = "contenedor_alerta";
    }
    return(
        <>
        <div className={estilo}>
            {props.children}
        </div>
        </>
    );
};

export default Contenedor;